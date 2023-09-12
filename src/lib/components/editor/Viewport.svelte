<script lang="ts">
    import { draggable } from '$lib/draggable';
    import type { Axis } from '$lib/type';

    export let background: string = 'transparent';
    export let color: string = '#15ff0d';
    export let disabled: boolean = false;
    export let height: number = 100;
    export let opacity: number = 0.1;
    export let width: number = 100;
    export let x: number = 100;
    export let y: number = 100;

    const onMove = (axis: Axis) => {
        x = axis.x;
        y = axis.y;
    };
</script>

<svg
    class="absolute left-0 top-0 h-full w-full"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMinYMin meet"
>
    <defs>
        <circle id="edge" fill={color} r={5} opacity={1} stroke="transparent" />
    </defs>

    <g
        fill={background}
        stroke-linejoin="round"
        stroke-opacity={0.6}
        stroke-width={3}
        stroke={color}
    >
        <rect
            fill-opacity={opacity}
            use:draggable={{ x, y, set: onMove, disabled }}
            {height}
            {width}
            {x}
            {y}
        />
    </g>
</svg>
