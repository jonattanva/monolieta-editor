<script lang="ts">
    import Rect from '../shape/Rect.svelte';
    import Cuboid from '../shape/Cuboid.svelte';
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
    <Rect {color} x={100} y={100} width={100} height={100} />
    <Cuboid
        {color}
        back={{ x: 200, y: 200, width: 100, height: 100 }}
        front={{ x: 250, y: 250, width: 100, height: 100 }}
    />
</svg>
