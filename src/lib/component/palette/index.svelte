<script>
    import outside from '$lib/action/outside';
    import { createEventDispatcher } from 'svelte';
    import { pallete } from '$lib/color';

    const dispatch = createEventDispatcher();

    const handleClose = () => dispatch('close');

    /**
     * @param {{ target: any; }} event
     */
    const handleColorChanged = (event) => {
        dispatch('click', {
            value: event.target.dataset.color
        });
    };
</script>

<div
    class="flex flex-row bg-white rounded flex-wrap justify-start shadow-md gap-1 content-around absolute z-10 p-4 w-56"
    use:outside={handleClose}
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
