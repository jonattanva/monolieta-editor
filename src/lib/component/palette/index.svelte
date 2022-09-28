<script>
    import OpenColor from 'open-color/open-color.json';
    import outside from '$lib/action/outside';

    export /** @type {number} */ let x = 0;
    export /** @type {number} */ let y = 0;
    export /** @type {() => void} */ let close;
    export /** @type {(arg0: string) => void} */ let click;

    // prettier-ignore
    const colors = [
        OpenColor.black, OpenColor.gray[6], OpenColor.red[6],
        OpenColor.pink[6], OpenColor.grape[6], OpenColor.violet[6],
        OpenColor.indigo[6], OpenColor.blue[6], OpenColor.cyan[6],
        OpenColor.teal[6], OpenColor.green[6], OpenColor.lime[6],
        OpenColor.yellow[6], OpenColor.orange[6]
    ];

    /**
     * @param {{ target: any; }} event
     */
    function handleColorChanged(event) {
        const color = event.target.dataset.color;
        if (click) {
            click(color);
        }
    }
</script>

<div class="main" style="left:{x}px; top:{y}px" use:outside={close}>
    {#each colors as color (color)}
        <button
            data-color={color}
            style={`--color-picker: ${color}`}
            on:click={handleColorChanged}
        />
    {/each}
</div>

<style>
    .main {
        align-content: space-around;
        background-color: var(--oc-white);
        border-radius: 4px;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 4px;
        justify-content: flex-start;
        padding: 16px;
        position: absolute;
        width: 224px;
        z-index: 10;
    }

    .main button {
        background-color: var(--color-picker);
        border-radius: 4px;
        border: 1px solid transparent;
        cursor: pointer;
        height: 24px;
        width: 24px;
    }
</style>
