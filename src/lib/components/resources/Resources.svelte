<script lang="ts">
    import Resource from './Resource.svelte';
    import type { Resources } from '$lib/type';

    export let entity: string | null = null;
    export let resources: Resources = [];
    export let selectable = false;
</script>

<div class="container mx-auto">
    <div class="flex flex-row flex-wrap gap-2">
        {#each resources as resource}
            <Resource {entity} {resource} {selectable} on:click />
        {/each}
    </div>
</div>
