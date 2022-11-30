<script lang="ts">
    import outside from '$lib/action/outside';
    import { createEventDispatcher } from 'svelte';
    import { pallete } from '$lib/color';

    const dispatch = createEventDispatcher();

    const handleClose = () => dispatch('close');

    const handleColorChanged = (event: any) => {
        dispatch('click', {
            value: event.target.dataset.color
        });
    };
</script>

<div
    class="absolute z-10 flex w-56 flex-row flex-wrap content-around justify-start gap-1 rounded bg-white p-4 shadow-md"
    use:outside={handleClose}
>
    {#each pallete as color (color)}
        <button
            class="h-5 w-5 cursor-pointer rounded"
            data-color={color}
            style={`background-color: ${color}`}
            on:click={handleColorChanged}
        />
    {/each}
</div>
