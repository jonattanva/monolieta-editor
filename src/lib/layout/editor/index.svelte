<script lang="ts">
    import Layer from './layer.svelte';
    import Toolbar from '$lib/component/toolbar/index.svelte';
    import Viewport from './viewport.svelte';

    export let debug: boolean = false;
    export let resource: Monolieta.Resource | null = null;

    let offsetHeight: number = 0;
    let offsetWidth: number = 0;

    let editorWidth: number = 0;
    let editorHeight: number = 0;

    const onResize = (event: CustomEvent) => {
        const detail = event.detail;
        editorWidth = detail.width;
        editorHeight = detail.height;
    };
</script>

<div class="m-0 flex h-full w-full items-stretch p-0" bind:offsetWidth bind:offsetHeight>
    <div class="relative m-0 flex h-full w-full items-stretch overflow-auto bg-transparent">
        <Layer
            displayHeight={offsetHeight}
            displayWidth={offsetWidth}
            on:resize={onResize}
            {resource}
        >
            <Viewport
                annotations={resource?.annotations}
                on:completed
                {debug}
                {editorHeight}
                {editorWidth}
            />
        </Layer>
    </div>
</div>

<div class="absolute z-50 p-2">
    <Toolbar />
</div>
