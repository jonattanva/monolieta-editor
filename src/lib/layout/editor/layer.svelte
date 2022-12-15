<script lang="ts">
    import Picture from '$lib/component/picture/index.svelte';

    export let resource: Monolieta.Resource | null = null;
</script>

<div class="absolute">
    <div class="absolute">
        {#if resource}
            <Picture source={resource.source} />
        {/if}
        <slot />
    </div>
</div>
