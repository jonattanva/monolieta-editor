<script lang="ts">
    export let disabled: boolean = false;
    export let testid: string = '';
</script>

<button
    on:click
    type="button"
    {disabled}
    data-testid={testid}
    class="inline-flex h-7 w-full items-center justify-center rounded border border-transparent bg-accent px-4 text-base font-medium text-white disabled:bg-accent-light sm:w-auto sm:text-sm"
>
    <slot />
</button>
