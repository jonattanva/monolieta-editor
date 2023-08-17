<script lang="ts">
    import Main from '$lib/layouts/Main.svelte';
    import Explorer from '$lib/template/Explorer.svelte';
</script>

<Main>
    <svelte:fragment slot="main">
        <Explorer />
    </svelte:fragment>
</Main>
