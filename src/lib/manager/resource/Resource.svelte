<script lang="ts">
    import Picture from '$lib/components/Picture.svelte';
    import { createEventDispatcher } from 'svelte';
    import type { Resource } from '$lib/type';

    const dispatch = createEventDispatcher();

    export let entity: string | null = null;
    export let resource: Resource;
    export let selectable = false;

    let completed = false;

    const onClick = (event: Event) => {
        if (selectable) {
            dispatch('click', {
                event,
                resource
            });
        }
    };

    const onLoad = (event: Event) => {
        completed = true;
        dispatch('load', {
            event,
            resource
        });
    };

    $: select = entity !== null && entity === resource.id;

    $: background = completed && select ? 'bg-primary' : '';
    $: size = completed && select ? 'h-[98%] w-[98%] p-0.5' : 'w-full h-full';

    $: cursor = selectable ? 'cursor-pointer' : 'cursor-default';
</script>

<button
    class="{cursor} {background} flex h-[120px] w-[120px] items-center justify-center transition-colors"
    data-testid="resource-row"
    on:click={onClick}
    type="button"
>
    <div class="{size} relative transition-transform">
        <Picture src={resource.source} on:load={onLoad} />
    </div>
</button>
