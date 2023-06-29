<script lang="ts">
    import Picture from '$lib/component/picture/index.svelte';
    import { createEventDispatcher } from 'svelte';

    import type { Resource } from '$lib/type';

    export let item: Resource;
    export let selected = false;

    let completed = false;

    const dispatch = createEventDispatcher();

    const onSelected = (event: Event) =>
        dispatch('click', {
            event,
            item
        });

    const onLoad = (event: Event) => {
        completed = true;
        dispatch('load', event);
    };

    $: background = completed && selected ? 'bg-primary' : '';
    $: size = completed && selected ? 'h-[98%] w-[98%] p-0.5' : 'w-full h-full';
</script>

<button
    class={`mx-auto flex h-[120px] w-[120px] items-center justify-center transition-colors ${background}`}
    type="button"
    on:click={onSelected}
>
    <div class={`transition-all	${size}`}>
        <Picture source={item.source} on:load={onLoad} alt="" />
    </div>
</button>
