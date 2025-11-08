<form class="flex flex-col gap-3" onsubmit={handleSubmit}>
  {@render props.children()}
</form>

<script lang="ts">
  import type { Snippet } from "svelte";

  const props: { children: Snippet; } = $props();
  const handleSubmit = async (e: SubmitEvent) => {
    e.stopPropagation()
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const button = form.querySelector('button[type="submit"]')!;
    button.setAttribute('disabled', 'true');
    const data = new FormData(form);
    const email = data.get("email");
    const verificationLink = data.get('link');
    // TODO : plug logic here
    await new Promise(resolve => setTimeout(resolve, 1000));

    button.removeAttribute('disabled');
    alert('Thank you for your interest!')
  }
</script>
