<script lang="ts">
    import Main from '$lib/layouts/Main.svelte';
    import Explorer from '$lib/manager/resource/Manager.svelte';
    import Editor from '$lib/manager/editor/Manager.svelte';
    import type { Resource } from '$lib/type';

    let resource: Resource | null = null;

    const onSelect = (event: CustomEvent) => {
        resource = event.detail;
    };
</script>

<Main>
    <svelte:fragment slot="main">
        <Explorer on:click={onSelect} entity={resource?.id} />
    </svelte:fragment>
    <svelte:fragment slot="body">
        <Editor {resource} />
    </svelte:fragment>
</Main>
