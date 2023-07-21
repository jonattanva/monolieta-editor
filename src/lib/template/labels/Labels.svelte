<script lang="ts">
    import Label from './Label.svelte';
    import type { Labels } from '$lib/type';

    export let labels: Labels = [];

    /**
     * Specifies a short hint
     */
    export let placeholder = '';
</script>

<div class="container mx-auto">
    <div class="flex flex-row flex-wrap gap-2">
        {#each labels as label (label.id)}
            <Label {label} {placeholder} on:change on:menu on:color />
        {/each}
    </div>
</div>
