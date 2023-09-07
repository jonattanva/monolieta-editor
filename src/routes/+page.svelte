<script lang="ts">
    import Main from '$lib/layouts/Main.svelte';
    import Resource from '$lib/manager/resource/Manager.svelte';
    import Toolbar from '$lib/components/toolbar/Toolbar.svelte';
</script>

<Main>
    <svelte:fragment slot="main">
        <Resource />
    </svelte:fragment>
    <svelte:fragment slot="body">
        <div class="absolute mx-4 my-5">
            <Toolbar />
        </div>
    </svelte:fragment>
</Main>
