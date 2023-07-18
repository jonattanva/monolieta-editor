<script lang="ts">
    import outside from '$lib/outside';
    import { colors } from '$lib/color';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    const onClose = () => dispatch('close');

    const onClick = (event: Event) => {
        const target = event.target as HTMLButtonElement;
        dispatch('click', {
            value: target.dataset.value
        });
    };
</script>

<div
    class="absolute z-10 flex w-56 flex-row flex-wrap content-around justify-start gap-1 rounded bg-white p-4 shadow-md"
    use:outside={onClose}
>
    {#each colors as color (color)}
        <button
            class="h-5 w-5 cursor-pointer rounded active:scale-95"
            data-value={color}
            on:click={onClick}
            style="background-color: {color}"
            type="button"
        />
    {/each}
</div>
