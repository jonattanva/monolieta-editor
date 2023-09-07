<script lang="ts">
    import Main from '$lib/layouts/Main.svelte';
    import Resource from '$lib/manager/resource/Manager.svelte';
    import Toolbar from '$lib/manager/editor/Manager.svelte';
</script>

<Main>
    <svelte:fragment slot="main">
        <Resource />
    </svelte:fragment>
    <svelte:fragment slot="body">
        <Toolbar />
    </svelte:fragment>
</Main>
