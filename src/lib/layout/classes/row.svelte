<script lang="ts">
    import Color from '$lib/component/color/index.svelte';
    import More from '$lib/component/action/more.svelte';
    import Text from '$lib/component/text/index.svelte';
    import { createEventDispatcher } from 'svelte';

    export let change: (label: Monolieta.Label) => void;
    export let item: Monolieta.Label;

    const dispatch = createEventDispatcher();

    const onMoreAction = (event: Event) =>
        dispatch('more', {
            event,
            item
        });

    const onColorAction = (event: Event) =>
        dispatch('color', {
            event,
            item
        });

    const onColorChanged = (event: Event) => {
        const target = event.target as HTMLInputElement;
        if (target) {
            item.color = target?.value.substring(0, 6);
            if (change) {
                change(item);
            }
        }
    };

    const onNameChanged = (event: Event) => {
        const target = event.target as HTMLInputElement;
        if (target) {
            item.name = target?.value;
            if (change) {
                change(item);
            }
        }
    };
</script>

<div class="p-1 flex flex-row w-full gap-2 px-2 hover:bg-gray-200">
    <div>
        <Color on:change={onColorChanged} on:click={onColorAction} value={item.color} />
    </div>
    <div class="flex flex-row w-full gap-2 justify-between">
        <Text placeholder="Enter label name" value={item.name} on:change={onNameChanged} />
        <More on:click={onMoreAction} />
    </div>
</div>
