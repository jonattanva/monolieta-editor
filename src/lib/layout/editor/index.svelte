<script lang="ts">
    import Layer from './layer.svelte';
    import Viewport from './viewport.svelte';

    export let resource: Monolieta.Resource | null = null;

    let width: number = 0;
    let height: number = 0;
</script>

<div
    class="m-0 flex h-full w-full items-stretch p-0"
    bind:offsetWidth={width}
    bind:offsetHeight={height}
>
    <div class="relative m-0 flex h-full w-full items-stretch overflow-auto bg-transparent">
        <Layer {resource} displayWidth={width} displayHeight={height}>
            <Viewport annotations={resource?.annotations} />
        </Layer>
    </div>
</div>
