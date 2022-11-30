<script lang="ts">
    export let disabled: boolean = false;
    export let test: string = '';
</script>

<button
    on:click
    type="button"
    {disabled}
    data-testid={test}
    class="inline-flex h-7 w-full items-center justify-center rounded border border-transparent bg-transparent bg-gray-100 px-4 text-base font-medium hover:bg-gray-300 sm:w-auto sm:text-sm"
>
    <slot />
</button>
