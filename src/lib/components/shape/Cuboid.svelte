<script lang="ts">
    import Component from './Rect.svelte';
    import Line from './Line.svelte';
    import type { Rect } from '$lib/type';

    export let from: Rect;
    export let to: Rect;

    let internal = {
        x: from.x,
        y: from.y
    }

    const onDrag = (event: CustomEvent) => {
        const detail = event.detail;
        internal = detail.value;
    };
</script>

<g>
    <Component {...from} on:drag={onDrag} />
    <Line
        disabled={true}
        from={{ x: internal.x, y: internal.y }}
        to={{ x: to.x, y: to.y }}
    />
    <Component {...to} />
</g>
