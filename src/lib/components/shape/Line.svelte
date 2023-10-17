<script lang="ts">
    import math from '$lib/math';
    import { KEY_CIRCLE_EDGE } from '$lib/constant';
    import { draggable } from '$lib/draggable';
    import type { Vector } from '$lib/type';

    export let color = '#15ff0d';
    export let disabled = false;
    export let opacity: number = 0.1;

    export let from: Vector;
    export let to: Vector;

    const onDrag = (vector: Vector) => {
        from = vector;
        // from = math.sum(from, vector);
        // to = math.sum(to, vector);
    };
</script>

<g stroke="transparent">
    <line
        fill-opacity={opacity}
        stroke={color}
        stroke-width="2"
        x1={from.x}
        x2={to.x}
        y1={from.y}
        y2={to.y}
    />
    
    <line
        stroke-width="20"
        use:draggable={{ disabled, update: onDrag, x: from.x, y: from.y }}
        x1={from.x}
        x2={to.x}
        y1={from.y}
        y2={to.y}
    />

    {#if !disabled}
        <g>
            <use
                data-type="edge"
                href={`#${KEY_CIRCLE_EDGE}`}
                x={from.x}
                y={from.y}
            />
            <use
                data-type="edge"
                href={`#${KEY_CIRCLE_EDGE}`}
                x={to.x}
                y={to.y}
            />
        </g>
    {/if}
</g>
