<script lang="ts">
  import { onMount } from "svelte";

  let status = $state<keyof typeof dictionary>("unknown");
  const dictionary = {
    operational: {
      label: "Operational",
      color: "#93C926"
    },
    degraded_performance: {
      label: "Degraded Performance",
      color: "#eab308"
    },
    partial_outage: {
      label: "Partial Outage",
      color: "#eab308"
    },
    major_outage: {
      label: "Major Outage",
      color: "#ef4444"
    },
    unknown: {
      label: "Unknown",
      color: "#6b7280"
    },
    incident: {
      label: "Incident",
      color: "#eab308"
    },
    under_maintenance: {
      label: "Under Maintenance",
      color: "#3b82f6"
    }
  };
  let label = $derived(dictionary[status].label);
  let color = $derived(dictionary[status].color);

  onMount(async () => {

    const fetchStatus = async () => {
      try {
        const res = await fetch(
          `https://api.openstatus.dev/public/status/probo-inc`,
          {
            headers: {
              Accept: "application/json"
            }
          }
        );
        const data = (await res.json()) as { status: keyof typeof dictionary };
        return data.status;
      } catch (error) {
        return "unknown" as const;
      }
    };

    status = (await fetchStatus());
  });
</script>

<a
  class="border border-border-mid bg-invert py-1.5 px-3 rounded-lg w-max flex items-center gap-2"
  href="https://probostatus.com"
  rel="noreferrer"
  target="_blank"
>
  <span
    class="relative inline-flex h-2 w-2 rounded-full "
    style:background-color={color}
  ></span>
  {label}
</a>
