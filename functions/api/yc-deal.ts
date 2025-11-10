const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ycVerifyRegex = /^https:\/\/www\.ycombinator\.com\/verify\/.+$/;

export async function onRequestPost(context: {
  request: Request;
  env: {
    N8N_YC_DEAL_WEBHOOK_URL: string;
    WEBHOOK_AUTH_USERNAME: string;
    WEBHOOK_AUTH_PASSWORD: string;
  };
}): Promise<Response> {
  try {
    const data = await context.request.formData();
    const email = data.get('email')?.toString();
    const link = data.get('link')?.toString();

    if (!email || !link) {
      return new Response(
        JSON.stringify({error: "email and verification link are required"}),
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

    if (!ycVerifyRegex.test(link)) {
      return new Response(
        JSON.stringify({error: "invalid verification link"}),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Create basic auth header
    const auth = btoa(`${context.env.WEBHOOK_AUTH_USERNAME}:${context.env.WEBHOOK_AUTH_PASSWORD}`);
    
    const webhookResponse = await fetch(context.env.N8N_YC_DEAL_WEBHOOK_URL, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": `Basic ${auth}`
      },
      body: JSON.stringify({email,link}),
    });

    if (!webhookResponse.ok) {
      console.error("cannot process yc deal submission:", await webhookResponse.text());

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
    console.error("cannot process yc deal submission:", error);

    return new Response(
      JSON.stringify({error: "internal server error"}),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
