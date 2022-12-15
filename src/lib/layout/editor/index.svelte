<script lang="ts">
    import Layer from './layer.svelte';
    import Viewport from './viewport.svelte';

    export let resource: Monolieta.Resource | null = null;
</script>

<div class="m-0 flex h-full w-full items-stretch p-0">
    <div class="relative m-0 flex h-full w-full items-stretch overflow-auto bg-transparent">
        <Layer {resource}>
            <Viewport />
        </Layer>
    </div>
</div>
