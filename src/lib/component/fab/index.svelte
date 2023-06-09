<script lang="ts">
    export let label: string | null = null;
    export let tabindex = 0;
    export let testid: string | null = null;
    export let title = '';
</script>

<button
    class="flex h-7 w-7 items-center justify-center rounded border border-gray-200 bg-gray-50 p-1 text-gray-700 outline-gray-300 hover:bg-gray-300"
    data-testid={testid}
    on:click
    type="button"
    aria-label={label}
    {tabindex}
    {title}
>
    <slot />
</button>
