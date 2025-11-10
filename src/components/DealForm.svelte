<script lang="ts">
  import type { Snippet } from "svelte";

  const props: { children: Snippet } = $props();
  const handleSubmit = async (e: SubmitEvent) => {
    e.stopPropagation();
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const button = form.querySelector('button[type="submit"]')!;
    button.setAttribute("disabled", "true");
    const data = new FormData(form);

    try {
      const response = await fetch("/api/yc-deal", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        alert("Thanks for your interest! We'll review your submission.");
        form.reset();
      } else {
        const result = await response.json();
        alert(result.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      button.removeAttribute("disabled");
    }
  };
</script>

<form class="flex flex-col gap-3" onsubmit={handleSubmit}>
  {@render props.children()}
</form>
