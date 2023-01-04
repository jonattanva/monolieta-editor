<script lang="ts">
    import Layer from './layer.svelte';
    import Viewport from './viewport.svelte';

    export let debug: boolean = true;
    export let resource: Monolieta.Resource | null = null;

    let offsetHeight: number = 0;
    let offsetWidth: number = 0;

    let height: number = 0;
    let width: number = 0;

    const onResize = (event: CustomEvent) => {
        const detail = event.detail;
        width = detail.width;
        height = detail.height;
    };

    console.log(resource)
</script>

<div class="m-0 flex h-full w-full items-stretch p-0" bind:offsetWidth bind:offsetHeight>
    <div class="relative m-0 flex h-full w-full items-stretch overflow-auto bg-transparent">
        <Layer
            displayHeight={offsetHeight}
            displayWidth={offsetWidth}
            on:resize={onResize}
            {resource}
        >
            <Viewport annotations={resource?.annotations} on:completed {debug} {height} {width} />
        </Layer>
    </div>
</div>
