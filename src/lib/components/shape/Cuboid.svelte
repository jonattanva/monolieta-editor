<script lang="ts">
    import Text from './Text.svelte';
    import math from '$lib/math';
    import { Edge } from '$lib/type';
    import { KEY_CIRCLE_EDGE } from '$lib/constant';
    import { draggable } from '$lib/draggable';
    import type { Rect, Vector } from '$lib/type';

    export let background = 'transparent';
    export let color = '#15ff0d';
    export let debug = true;
    export let disabled = false;
    export let label = '';
    export let opacity: number = 0.1;

    export let back: Rect;
    export let front: Rect;

    const onDragBack = (vector: Vector) => {
        front.x = vector.x;
        front.y = vector.y;
    };

    const onDragFront = (vector: Vector) => {
        front.x = vector.x;
        front.y = vector.y;
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
        data-face="back"
        use:draggable={{ disabled, update: onDragBack, x: back.x, y: back.y }}
        fill-opacity={opacity}
        height={back.height}
        width={back.width}
        x={back.x}
        y={back.y}
    />

    {#if debug}
        {@const center = math.centroid(back)}
        <use href={`#${KEY_CIRCLE_EDGE}`} x={center.x} y={center.y} />
    {/if}

    <polygon
        data-face="left"
        points={`${back.x} ${back.y}, ${front.x} ${front.y}, ${front.x} ${
            front.y + front.height
        }, ${back.x} ${back.y + back.width}`}
    />
    <polygon
        data-face="top"
        points={`${back.x} ${back.y}, ${back.x + back.width} ${back.y}, ${
            front.x + front.width
        } ${front.y} ${front.x} ${front.y}`}
    />
    <!--<polygon
        data-face="right"
        points={`${back.x + back.width} ${back.y}, ${back.x + back.width} ${
            back.x + back.width
        }, ${front.x + front.width} ${front.y + front.height}, ${
            front.x + front.width
        } ${front.y}`}
    />-->
    <polygon
        data-face="bottom"
        points={`${back.x} ${back.y + back.width}, ${back.x + back.width} ${
            back.y + back.height
        }, ${front.x + front.width} ${front.y + front.height}, ${front.x} ${
            front.y + front.width
        }`}
    />
    <rect
        data-face="front"
        use:draggable={{ disabled, update: onDragFront, x: back.x, y: back.y }}
        fill-opacity={opacity}
        height={front.height}
        width={front.width}
        x={front.x}
        y={front.y}
    />

    {#if debug}
        {@const center = math.centroid(front)}
        <use href={`#${KEY_CIRCLE_EDGE}`} x={center.x} y={center.y} />
    {/if}

    {#if label}
        <Text x={front.x} y={front.y} {color} {label} />
    {/if}

    {#if !disabled}
        <g>
            <use
                data-type={Edge.NW}
                href={`#${KEY_CIRCLE_EDGE}`}
                x={back.x}
                y={back.y}
            />
            <use
                data-type={Edge.N}
                href={`#${KEY_CIRCLE_EDGE}`}
                x={back.x + back.width / 2}
                y={back.y}
            />
            <use
                data-type={Edge.NE}
                href={`#${KEY_CIRCLE_EDGE}`}
                x={back.x + back.width}
                y={back.y}
            />
            <use
                data-type={Edge.E}
                href={`#${KEY_CIRCLE_EDGE}`}
                x={back.x + back.width}
                y={back.y + back.width / 2}
            />
            <use
                data-type={Edge.SE}
                href={`#${KEY_CIRCLE_EDGE}`}
                x={back.x + back.width}
                y={back.y + back.width}
            />
            <use
                data-type={Edge.S}
                href={`#${KEY_CIRCLE_EDGE}`}
                x={back.x + back.width / 2}
                y={back.y + back.width}
            />
            <use
                data-type={Edge.SW}
                href={`#${KEY_CIRCLE_EDGE}`}
                x={back.x}
                y={back.y + back.width}
            />
            <use
                data-type={Edge.W}
                href={`#${KEY_CIRCLE_EDGE}`}
                x={back.x}
                y={back.y + back.width / 2}
            />
            <use
                data-type={Edge.NW}
                x={front.x}
                href={`#${KEY_CIRCLE_EDGE}`}
                y={front.y}
            />
            <use
                data-type={Edge.N}
                x={front.x + front.width / 2}
                href={`#${KEY_CIRCLE_EDGE}`}
                y={front.y}
            />
            <use
                data-type={Edge.NE}
                x={front.x + front.width}
                href={`#${KEY_CIRCLE_EDGE}`}
                y={front.y}
            />
            <use
                data-type={Edge.E}
                href={`#${KEY_CIRCLE_EDGE}`}
                x={front.x + front.width}
                y={front.y + front.width / 2}
            />
            <use
                data-type={Edge.SE}
                href={`#${KEY_CIRCLE_EDGE}`}
                x={front.x + front.width}
                y={front.y + front.width}
            />
            <use
                data-type={Edge.S}
                href={`#${KEY_CIRCLE_EDGE}`}
                x={front.x + front.width / 2}
                y={front.y + front.width}
            />
            <use
                data-type={Edge.SW}
                href={`#${KEY_CIRCLE_EDGE}`}
                x={front.x}
                y={front.y + front.width}
            />
            <use
                data-type={Edge.W}
                href={`#${KEY_CIRCLE_EDGE}`}
                x={front.x}
                y={front.y + front.width / 2}
            />
        </g>
    {/if}
</g>
