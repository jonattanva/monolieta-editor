<script lang="ts">
    import Toolbar from '$lib/components/toolbar/Toolbar.svelte';

    const onClick = (event: CustomEvent) => {
        console.log(event);
    };
</script>

<div class="absolute mx-4 my-5">
    <Toolbar on:click={onClick} />
</div>
