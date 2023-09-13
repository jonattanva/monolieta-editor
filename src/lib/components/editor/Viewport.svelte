<script lang="ts">
    import Rect from '../shape/Rect.svelte';
    import { KEY_CIRCLE_EDGE } from '$lib/constant';

    export let color: string = '#15ff0d';
</script>

<svg
    class="absolute left-0 top-0 h-full w-full"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMinYMin meet"
>
    <defs>
        <circle
            fill={color}
            id={KEY_CIRCLE_EDGE}
            opacity={1}
            r={5}
            stroke="transparent"
        />
    </defs>
    <Rect {color} />
</svg>
