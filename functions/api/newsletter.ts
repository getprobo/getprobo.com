const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function onRequestPost(context: {
  request: Request;
  env: {
    N8N_NEWSLETTER_WEBHOOK_URL: string;
    WEBHOOK_AUTH_USERNAME: string;
    WEBHOOK_AUTH_PASSWORD: string;
  };
}): Promise<Response> {
  try {
    const data = await context.request.formData();
    const email = data.get('email')?.toString();

    if (!email) {
      return new Response(
        JSON.stringify({error: "email is required"}),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({error: "invalid email format"}),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Create basic auth header
    const auth = btoa(`${context.env.WEBHOOK_AUTH_USERNAME}:${context.env.WEBHOOK_AUTH_PASSWORD}`);
    
    const webhookResponse = await fetch(context.env.N8N_NEWSLETTER_WEBHOOK_URL, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": `Basic ${auth}`
      },
      body: JSON.stringify({email}),
    });

    if (!webhookResponse.ok) {
      console.error("cannot process newsletter subscription:", await webhookResponse.text());

      return new Response(
        JSON.stringify({error: "internal server error"}),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new Response(
      JSON.stringify({}),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );

  } catch (error) {
    console.error("cannot process newsletter subscription:", error);

    return new Response(
      JSON.stringify({error: "internal server error"}),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
