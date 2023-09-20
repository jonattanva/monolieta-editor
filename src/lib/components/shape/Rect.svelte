<script lang="ts">
    import Text from './Text.svelte';
    import math from '$lib/math';
    import { Edge } from '$lib/type';
    import { KEY_CIRCLE_EDGE } from '$lib/constant';
    import { draggable } from '$lib/draggable';
    import { resize } from '$lib/resize';
    import type { Rect, Vector } from '$lib/type';

    export let background = 'transparent';
    export let color = '#15ff0d';
    export let debug = false;
    export let disabled = false;
    export let height: number;
    export let label = '';
    export let opacity: number = 0.1;
    export let width: number;
    export let x: number;
    export let y: number;

    let position = {
        height,
        width,
        x,
        y
    };

    let center = math.centroid(position);

    const apply = (event: CustomEvent) => {
        position = {
            x,
            y,
            width,
            height,
            ...event.detail
        };

        center = math.centroid(position);
    };

    const onDrag = (vector: Vector) => {
        x = vector.x;
        y = vector.y;
    };

    const onResize = (rect: Rect) => {
        height = rect.height;
        width = rect.width;
        x = rect.x;
        y = rect.y;
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
        on:draggableend={apply}
        {height}
        {width}
        {x}
        {y}
    />
    
    {#if debug}
        {@const center = math.centroid({ width, height, x, y })}
        <use href={`#${KEY_CIRCLE_EDGE}`} x={center.x} y={center.y} />
    {/if}

    {#if label}
        <Text {x} {y} {color} {label} />
    {/if}

    {#if !disabled}
        <g>
            <use
                data-type={Edge.NW}
                href={`#${KEY_CIRCLE_EDGE}`}
                on:resizeend={apply}
                use:resize={{
                    ...position,
                    center,
                    disabled,
                    update: onResize
                }}
                {x}
                {y}
            />
            <use
                data-type={Edge.N}
                href={`#${KEY_CIRCLE_EDGE}`}
                on:resizeend={apply}
                use:resize={{
                    ...position,
                    center,
                    disabled,
                    update: onResize
                }}
                x={x + width / 2}
                {y}
            />
            <use
                data-type={Edge.NE}
                href={`#${KEY_CIRCLE_EDGE}`}
                on:resizeend={apply}
                use:resize={{
                    ...position,
                    center,
                    disabled,
                    update: onResize
                }}
                x={x + width}
                {y}
            />
            <use
                data-type={Edge.E}
                href={`#${KEY_CIRCLE_EDGE}`}
                on:resizeend={apply}
                use:resize={{
                    ...position,
                    center,
                    disabled,
                    update: onResize
                }}
                x={x + width}
                y={y + height / 2}
            />
            <use
                data-type={Edge.SE}
                href={`#${KEY_CIRCLE_EDGE}`}
                on:resizeend={apply}
                use:resize={{
                    ...position,
                    center,
                    disabled,
                    update: onResize
                }}
                x={x + width}
                y={y + height}
            />
            <use
                data-type={Edge.S}
                href={`#${KEY_CIRCLE_EDGE}`}
                on:resizeend={apply}
                use:resize={{
                    ...position,
                    center,
                    disabled,
                    update: onResize
                }}
                x={x + width / 2}
                y={y + height}
            />
            <use
                data-type={Edge.SW}
                href={`#${KEY_CIRCLE_EDGE}`}
                on:resizeend={apply}
                use:resize={{
                    ...position,
                    center,
                    disabled,
                    update: onResize
                }}
                y={y + height}
                {x}
            />
            <use
                data-type={Edge.W}
                href={`#${KEY_CIRCLE_EDGE}`}
                on:resizeend={apply}
                use:resize={{
                    ...position,
                    center,
                    disabled,
                    update: onResize
                }}
                y={y + height / 2}
                {x}
            />
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
