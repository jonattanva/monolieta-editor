<script lang="ts">
    import Main from '$lib/layouts/Main.svelte';
    import Explorer from '$lib/manager/resource/Manager.svelte';
    import Editor from '$lib/manager/editor/Manager.svelte';
    import type { Resource } from '$lib/type';
    import { PUBLIC_ACCEPT_RESOURCE } from '$env/static/public';

    let resource: Resource | null = null;

    const onSelect = (event: CustomEvent) => {
        resource = event.detail;
    };
</script>

<Main>
    <svelte:fragment slot="main">
        <Explorer
            accept={PUBLIC_ACCEPT_RESOURCE}
            entity={resource?.id}
            on:click={onSelect}
        />
    </svelte:fragment>
    <svelte:fragment slot="body">
        <Editor {resource} />
    </svelte:fragment>
</Main>
