<script lang="ts">
    import Color from '$lib/components/Color.svelte';
    import Fab from '$lib/components/buttons/Fab.svelte';
    import Text from '$lib/components/inputs/Text.svelte';
    import ellipsisVertical from '$lib/assets/image/ellipsis-vertical.svg';
    import { createEventDispatcher } from 'svelte';
    import type { Label } from '$lib/type';

    export let label: Label | null = null;

    /**
     * Specifies a short hint
     */
    export let placeholder = '';

    const dispatch = createEventDispatcher();

    const onColorChanged = (event: Event) => {
        const target = event.target as HTMLInputElement;
        if (label) {
            label.color = target?.value.substring(0, 6);
            dispatch('change', {
                value: label
            });
        }
    };

    const onNameChanged = (event: Event) => {
        const target = event.target as HTMLInputElement;
        if (label) {
            label.name = target?.value;
            dispatch('change', {
                value: label
            });
        }
    };

    const onColorAction = (event: Event) =>
        dispatch('color', {
            event,
            label
        });

    const onMoreAction = (event: Event) =>
        dispatch('menu', {
            event,
            label
        });
</script>

<div class="flex w-full items-center justify-between gap-2">
    <div class="shrink">
        <Color value={label?.color} on:change={onColorChanged} on:click={onColorAction} />
    </div>
    <Text {placeholder} on:change={onNameChanged} value={label?.name} />
    <div class="shrink">
        <Fab
            alt="More icon"
            image={ellipsisVertical}
            on:click={onMoreAction}
            tabindex={-1}
            testid="more"
        />
    </div>
</div>
