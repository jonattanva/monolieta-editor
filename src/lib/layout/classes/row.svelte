<script lang="ts">
    import Color from '$lib/component/color/index.svelte';
    import EllipsisHorizontal from '$lib/component/icon/ellipsis-horizontal.svelte';
    import Fab from '$lib/component/fab/index.svelte';
    import Text from '$lib/component/text/index.svelte';
    import { createEventDispatcher } from 'svelte';

    export let item: Monolieta.Label;

    const dispatch = createEventDispatcher();

    const onMoreAction = (event: Event) =>
        dispatch('menu', {
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
            dispatch('change', {
                value: item
            });
        }
    };

    const onNameChanged = (event: Event) => {
        const target = event.target as HTMLInputElement;
        if (target) {
            item.name = target?.value;
            dispatch('change', {
                value: item
            });
        }
    };
</script>

<div class="flex w-full flex-row gap-2 p-1 px-4 hover:bg-gray-200">
    <div>
        <Color on:change={onColorChanged} on:click={onColorAction} value={item.color} />
    </div>
    <div class="flex w-full flex-row justify-between gap-2">
        <Text placeholder="Enter label name" value={item.name} on:change={onNameChanged} />
        <Fab on:click={onMoreAction} testid="more">
            <span class="h-5 w-5">
                <EllipsisHorizontal />
            </span>
        </Fab>
    </div>
</div>
