<script lang="ts">
    /**
     * How large should the dropdown be?
     */
    export let size: 'small' | 'medium' = 'small';

    $: style = size === 'small' ? ' w-56' : 'w-60';
</script>

<div
    class="relative z-10 flex flex-row flex-wrap content-around justify-start rounded-lg bg-theme-light shadow-md dark:bg-theme-dark {style}"
>
    <slot />
</div>
