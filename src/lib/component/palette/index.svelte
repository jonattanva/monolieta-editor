<script>
    import { pallete } from '$lib/color';
    import outside from '$lib/action/outside';

    export /** @type {() => void} */ let close;
    export /** @type {(arg0: string) => void} */ let click;

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

<div
    class="flex flex-row bg-white rounded flex-wrap justify-start shadow-md gap-1 content-around absolute z-10 p-4 w-56"
    use:outside={close}
>
    {#each pallete as color (color)}
        <button
            class="rounded cursor-pointer h-5 w-5"
            data-color={color}
            style={`background-color: ${color}`}
            on:click={handleColorChanged}
        />
    {/each}
</div>
