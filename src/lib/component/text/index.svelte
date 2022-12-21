<script lang="ts">
    export let background: string = '#333';
    export let color: string = '#15ff0d';
    export let label: string = '';
    export let x: number;
    export let y: number;

    const getSize = (value?: string, fontSize: number = 12) => {
        if (!value) {
            return 0;
        }

        const text = document.createElement('span');
        document.body.appendChild(text);

        text.style.fontSize = `${fontSize}px`;
        text.style.height = 'auto';
        text.style.width = 'auto';
        text.style.position = 'absolute';
        text.style.whiteSpace = 'no-wrap';
        text.innerHTML = value;

        const width = Math.ceil(text.clientWidth);
        document.body.removeChild(text);

        return width;
    };

    $: width = getSize(label);
</script>

<g stroke="transparent" class="text-xs">
    <rect
        fill={background}
        height={16}
        stroke-width="0"
        width={width + 8}
        x={x + 1.5}
        y={y + 1.5}
    />
    <text fill={color} x={x + 5} y={y + 13.5}>
        {label}
    </text>
</g>
