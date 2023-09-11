<script lang="ts">
    import Toolbar from '$lib/components/toolbar/Toolbar.svelte';
    import { set, action } from '$lib/stores/action';

    const onClick = (event: CustomEvent) => {
        set(event.detail);
    };
</script>

<div class="absolute mx-4 my-5">
    <Toolbar on:click={onClick} action={$action} />
</div>
