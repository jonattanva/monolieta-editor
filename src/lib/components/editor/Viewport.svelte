<script lang="ts">
    import resize from '$lib/resize';
    import { centroid } from '$lib/math';
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

    const onResize = () => {};

    $: center = centroid({ x, y, width, height });

    $: {
        console.log('center', center);
    }
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

        <use href="#edge" data-type="nw-resize" {x} {y} />
        <use
            data-type="n-resize"
            href="#edge"
            use:resize={{ set: onResize, disabled }}
            x={x + width / 2}
            {y}
        />
        <use href="#edge" data-type="ne-resize" x={x + width} {y} />
        <use
            href="#edge"
            data-type="e-resize"
            x={x + width}
            y={y + height / 2}
        />
        <use href="#edge" data-type="se-resize" x={x + width} y={y + height} />
        <use
            href="#edge"
            data-type="s-resize"
            x={x + width / 2}
            y={y + height}
        />
        <use href="#edge" data-type="sw-resize" {x} y={y + height} />
        <use href="#edge" data-type="w-resize" {x} y={y + height / 2} />
        <use href="#edge" x={center.x} y={center.y} />
    </g>
</svg>

<style>
    use[data-type='se-resize'],
    use[data-type='nw-resize'] {
        cursor: nwse-resize;
    }

    use[data-type='s-resize'],
    use[data-type='n-resize'] {
        cursor: ns-resize;
    }

    use[data-type='sw-resize'],
    use[data-type='ne-resize'] {
        cursor: nesw-resize;
    }

    use[data-type='w-resize'],
    use[data-type='e-resize'] {
        cursor: ew-resize;
    }
</style>
