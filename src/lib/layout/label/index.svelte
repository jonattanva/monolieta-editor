<script lang="ts">
    import Content from './content.svelte';
    import Remove from './remove.svelte';
    import Slide from '$lib/component/slide-over/index.svelte';
    import store from '$lib/store/label';

    import type { Labels } from '$lib/type';

    export let items: Labels = [];

    let isOpenRemoveModal = false;
    let custom: CustomEvent | null = null;

    const onOpenRemoveModal = (event: CustomEvent) => {
        custom = event;
        isOpenRemoveModal = true;
    };

    const onCloseRemoveModal = () => {
        custom = null;
        isOpenRemoveModal = false;
    };

    const onRemoveLabel = () => {
        if (custom) {
            store.remove(custom.detail.label);
            onCloseRemoveModal();
        }
    };
</script>

<Slide>
    <Content on:remove={onOpenRemoveModal} on:close {items} />
</Slide>

{#if isOpenRemoveModal}
    <Remove
        on:cancel={onCloseRemoveModal}
        on:submit={onRemoveLabel}
        item={custom?.detail.label.name}
    />
{/if}
