<script lang="ts">
    import text from '$lib/text';

    export let background = '#333';
    export let color = '#15ff0d';
    export let x: number;
    export let y: number;

    /**
     * Button contents
     */
    export let label = '';

    $: size = text(label);
</script>

<g stroke="transparent">
    <rect
        fill={background}
        height={16}
        stroke-width="0"
        width={size.width + 8}
        x={x + 1.5}
        y={y + 1.5}
    />
    <text fill={color} style="font-size: 12px;" x={x + 5} y={y + 13.5}>
        {label}
    </text>
</g>
