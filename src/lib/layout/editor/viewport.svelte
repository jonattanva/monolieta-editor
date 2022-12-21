<script lang="ts">
    import Rect from '$lib/component/rect/index.svelte';

    export let color: string = '#15ff0d';
    export let annotations: Monolieta.Annotations = [];
</script>

<svg
    class="absolute left-0 top-0 h-full w-full"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMinYMin meet"
>
    <defs>
        <circle id="edge" class="stroke-transparent opacity-100" fill={color} r="5" />
    </defs>

    {#each annotations as annotation (annotation.id)}
        {#if annotation.type === 'rect'}
            <Rect
                height={annotation.position[3]}
                width={annotation.position[2]}
                x={annotation.position[0]}
                y={annotation.position[1]}
            />
        {/if}
    {/each}
</svg>
