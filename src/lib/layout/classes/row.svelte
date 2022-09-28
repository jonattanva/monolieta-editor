<script lang="ts">
    import Color from '$lib/component/color/index.svelte';
    import More from '$lib/component/action/more.svelte';
    import Text from '$lib/component/text/index.svelte';

    export let change: (label: Monolieta.Label) => void;
    export let item: Monolieta.Label;
    export let more: (event: Event, item: Monolieta.Label) => void;
    export let color: (event: Event, item: Monolieta.Label) => void;

    function handleOpenColor(event: Event) {
        if (color) {
            color(event, item);
        }
    }

    function handleOpenMore(event: Event) {
        if (more) {
            more(event, item);
        }
    }

    function handleColorChanged(value: string) {
        item.color = value.substring(0, 6);
        if (change) {
            change(item);
        }
    }

    function handleNameChanged(value: string) {
        item.name = value;
        if (change) {
            change(item);
        }
    }
</script>

<div class="main p-1 flex flex-row w-full gap-2 px-2">
    <div>
        <Color change={handleColorChanged} value={item.color} open={handleOpenColor} />
    </div>
    <div class="flex flex-row w-full gap-2 justify-between">
        <Text placeholder="Enter label name" value={item.name} change={handleNameChanged} />
        <More click={handleOpenMore} />
    </div>
</div>

<style>
    .main:hover {
        background-color: var(--oc-gray-1);
    }
</style>
