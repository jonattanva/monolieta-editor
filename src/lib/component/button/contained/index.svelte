<script lang="ts">
    export let disabled = false;
    export let size: 'small' | 'normal' = 'normal';
    export let testid = '';

    // prettier-ignore
    const style = size === 'normal' 
        ? 'h-10 text-base' 
        : 'h-7 text-sm';
</script>

<button
    class="inline-flex {style} w-full items-center justify-center rounded-md border border-transparent bg-primary px-4 py-2 font-medium text-white outline-offset-2 outline-primary-dark hover:bg-primary-dark"
    data-testid={testid}
    on:click
    type="button"
    {disabled}
>
    <slot />
</button>
