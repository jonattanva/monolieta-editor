<script lang="ts">
    import { Edge } from '$lib/type';
    import { KEY_CIRCLE_EDGE } from '$lib/constant';
    import { centroid } from '$lib/math';
    import { draggable } from '$lib/draggable';
    import { resize } from '$lib/resize';
    import type { Axis, Rect } from '$lib/type';

    export let background: string = 'transparent';
    export let color: string = '#15ff0d';
    export let debug = true;
    export let disabled: boolean = false;
    export let height: number = 100;
    export let opacity: number = 0.1;
    export let width: number = 100;
    export let x: number = 100;
    export let y: number = 100;

    let center = centroid({ x, y, width, height });
    let position = {
        height,
        width,
        x,
        y
    };

    const onDrag = (axis: Axis) => {
        x = axis.x;
        y = axis.y;

        center = centroid({
            ...axis,
            width,
            height
        });
    };

    const onResize = (rect: Rect) => {
        height = rect.height;
        width = rect.width;
        x = rect.x;
        y = rect.y;
    };

    const onResizeEnd = (event: CustomEvent) => {
        const position = event.detail;
        center = centroid(position);
    };
</script>

<g
    fill={background}
    stroke-linejoin="round"
    stroke-opacity={0.6}
    stroke-width={3}
    stroke={color}
>
    <rect
        fill-opacity={opacity}
        use:draggable={{ disabled, update: onDrag, x, y }}
        {height}
        {width}
        {x}
        {y}
    />

    {#if !disabled}
        <g>
            <use
                data-type={Edge.NW}
                href={`#${KEY_CIRCLE_EDGE}`}
                on:resizeend={onResizeEnd}
                use:resize={{
                    center,
                    disabled,
                    height,
                    update: onResize,
                    width,
                    x,
                    y
                }}
                {x}
                {y}
            />
            <use
                data-type={Edge.N}
                href={`#${KEY_CIRCLE_EDGE}`}
                on:resizeend={onResizeEnd}
                use:resize={{
                    center,
                    disabled,
                    height,
                    update: onResize,
                    width,
                    x,
                    y
                }}
                x={x + width / 2}
                {y}
            />
            <use
                data-type={Edge.NE}
                href={`#${KEY_CIRCLE_EDGE}`}
                on:resizeend={onResizeEnd}
                use:resize={{
                    center,
                    disabled,
                    height,
                    update: onResize,
                    width,
                    x,
                    y
                }}
                x={x + width}
                {y}
            />
            <use
                data-type={Edge.E}
                href={`#${KEY_CIRCLE_EDGE}`}
                on:resizeend={onResizeEnd}
                use:resize={{
                    center,
                    disabled,
                    height,
                    update: onResize,
                    width,
                    x,
                    y
                }}
                x={x + width}
                y={y + height / 2}
            />
            <use
                data-type={Edge.SE}
                href={`#${KEY_CIRCLE_EDGE}`}
                on:resizeend={onResizeEnd}
                use:resize={{
                    center,
                    disabled,
                    height,
                    update: onResize,
                    width,
                    x,
                    y
                }}
                x={x + width}
                y={y + height}
            />
            <use
                data-type={Edge.S}
                href={`#${KEY_CIRCLE_EDGE}`}
                on:resizeend={onResizeEnd}
                use:resize={{
                    center,
                    disabled,
                    height,
                    update: onResize,
                    width,
                    x,
                    y
                }}
                x={x + width / 2}
                y={y + height}
            />
            <use
                data-type={Edge.SW}
                href={`#${KEY_CIRCLE_EDGE}`}
                on:resizeend={onResizeEnd}
                use:resize={{
                    center,
                    disabled,
                    height,
                    update: onResize,
                    width,
                    x,
                    y
                }}
                y={y + height}
                {x}
            />
            <use
                data-type={Edge.W}
                href={`#${KEY_CIRCLE_EDGE}`}
                on:resizeend={onResizeEnd}
                use:resize={{
                    center,
                    disabled,
                    height,
                    update: onResize,
                    width,
                    x,
                    y
                }}
                y={y + height / 2}
                {x}
            />
            {#if debug}
                <use href={`#${KEY_CIRCLE_EDGE}`} x={center.x} y={center.y} />
            {/if}
        </g>
    {/if}
</g>

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
