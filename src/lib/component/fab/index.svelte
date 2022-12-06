<script lang="ts">
    export let label: string | null = null;
    export let tabindex: number = 0;
    export let testid: string | null = null;
    export let title: string = '';
</script>

<button
    class="flex h-7 w-7 items-center justify-center rounded border border-gray-200 bg-gray-100 p-1 text-gray-700 outline-gray-300 hover:bg-gray-300"
    data-testid={testid}
    on:click
    type="button"
    aria-label={label}
    {tabindex}
    {title}
>
    <slot />
</button>
