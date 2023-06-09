<script lang="ts">
    export let disabled = false;
    export let testid = '';
</script>

<button
    class="inline-flex h-10 w-full items-center justify-center rounded-md border border-transparent bg-accent px-4 py-2 text-base font-medium outline-offset-2 outline-accent-dark hover:bg-accent-dark"
    data-testid={testid}
    on:click
    type="button"
    {disabled}
>
    <slot />
</button>
