<script lang="ts">
    import Text from '$lib/component/text/index.svelte';
    import draggable from '$lib/action/draggable';
    import outside from '$lib/action/outside';
    import resize from './action/resize';
    import { centroid } from '$lib/display';
    import { createEventDispatcher } from 'svelte';

    export let background: string = 'transparent';
    export let color: string = '#15ff0d';
    export let debug: boolean = false;
    export let disabled: boolean = false;
    export let height: number;
    export let label: string = '';
    export let opacity: number = 0.1;
    export let selected: boolean = false;
    export let testid: string = '';
    export let width: number;
    export let x: number;
    export let y: number;

    const dispatch = createEventDispatcher();

    $: rect = { x, y, width, height };
    $: center = centroid(rect);

    const onMove = (axis: Monolieta.Axis) => {
        x = axis.x;
        y = axis.y;
    };

    const onResize = (rect: Monolieta.Rect) => {
        x = rect.x;
        y = rect.y;
        width = rect.width;
        height = rect.height;
    };

    const handleClose = () => dispatch('deselect');
</script>

<g
    class="stroke-round stroke-opacity-60 stroke-3"
    fill={background}
    stroke={color}
    use:outside={handleClose}
>
    <rect
        data-testid={testid}
        fill-opacity={opacity}
        on:click
        on:keydown
        use:draggable={{ set: onMove }}
        {height}
        {width}
        {x}
        {y}
    />

    {#if label}
        <Text {x} {y} {label} />
    {/if}

    <g>
        {#if debug}
            <use href="#edge" x={center.x} y={center.y} />
        {/if}

        {#if !disabled && selected}
            <use
                class="cursor-nwse-resize"
                data-type="nw-resize"
                href="#edge"
                use:resize={{ center, set: onResize, rect }}
                {x}
                {y}
            />
            <use
                class="cursor-ns-resize"
                data-type="n-resize"
                href="#edge"
                use:resize={{ center, set: onResize, rect }}
                x={x + width / 2}
                {y}
            />
            <use
                class="cursor-nesw-resize"
                data-type="ne-resize"
                href="#edge"
                use:resize={{ center, set: onResize, rect }}
                x={x + width}
                {y}
            />
            <use
                class="cursor-ew-resize"
                data-type="e-resize"
                href="#edge"
                use:resize={{ center, set: onResize, rect }}
                x={x + width}
                y={y + height / 2}
            />
            <use
                class="cursor-nwse-resize"
                data-type="se-resize"
                href="#edge"
                use:resize={{ center, set: onResize, rect }}
                x={x + width}
                y={y + height}
            />
            <use
                class="cursor-ns-resize"
                data-type="s-resize"
                href="#edge"
                use:resize={{ center, set: onResize, rect }}
                x={x + width / 2}
                y={y + height}
            />
            <use
                class="cursor-nesw-resize"
                data-type="sw-resize"
                href="#edge"
                use:resize={{ center, set: onResize, rect }}
                y={y + height}
                {x}
            />
            <use
                class="cursor-ew-resize"
                data-type="w-resize"
                href="#edge"
                use:resize={{ center, set: onResize, rect }}
                y={y + height / 2}
                {x}
            />
        {/if}
    </g>
</g>

{#if debug}
    <Text x={0} y={0} label={`Center: ${JSON.stringify(center)}`} />
    <Text x={0} y={16} label={`Position: ${JSON.stringify({ x, y, width, height })}`} />
{/if}
