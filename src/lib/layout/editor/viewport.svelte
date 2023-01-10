<script lang="ts">
    import Rect from '$lib/component/rect/index.svelte';

    export let annotations: Monolieta.Annotations = [];
    export let color: string = '#15ff0d';
    export let debug: boolean = false;
    export let editorHeight: number = 0;
    export let editorWidth: number = 0;
</script>

<svg
    class="absolute left-0 top-0 h-full w-full"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMinYMin meet"
    viewBox="0 0 {editorWidth} {editorHeight}"
>
    <defs>
        <circle id="edge" class="stroke-transparent opacity-100" fill={color} r="5" />
    </defs>

    {#each annotations as annotation (annotation.id)}
        {#if annotation.type === 'rect'}
            <Rect
                height={annotation.position[3]}
                key={annotation.id}
                on:completed
                width={annotation.position[2]}
                x={annotation.position[0]}
                y={annotation.position[1]}
                {debug}
            />
        {/if}
    {/each}
</svg>
