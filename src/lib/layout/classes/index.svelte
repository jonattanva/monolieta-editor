<script lang="ts">
    import Header from './header.svelte';
    import Body from './body.svelte';
    import store, { template } from '$lib/store/label';

    export let message: string | null = null;
    export let items: Monolieta.Labels = [];

    const onCreateNewLabel = () => {
        store.add(template());
    };

    const onLabelChanged = (custom: CustomEvent) => {
        store.set(custom.detail.label);
    };

    const onDuplicateLabel = (custom: CustomEvent) => {
        store.duplicate(custom.detail.label);
    };

    const onRemoveLabel = (custom: CustomEvent) => {
        store.remove(custom.detail.label);
    };

    const onDescending = () => {
        store.sort((a: Monolieta.Label, b: Monolieta.Label) => {
            return b.name.localeCompare(a.name);
        });
    };

    const onAscending = () => {
        store.sort((a: Monolieta.Label, b: Monolieta.Label) => {
            return a.name.localeCompare(b.name);
        });
    };

    const onSearch = (custom: CustomEvent) => {
        const value = custom.detail.value;
        items = store.search(value);

        message = null;
        if (value.length > 0 && items.length == 0) {
            message = 'No labels found';
        }
    };
</script>

<div class="flex w-full flex-col gap-4">
    <Header
        title="Labels"
        on:close
        on:search={onSearch}
        on:create={onCreateNewLabel}
        on:ascending={onAscending}
        on:descending={onDescending}
    >
        <Body
            {message}
            collection={items}
            on:create={onCreateNewLabel}
            on:change={onLabelChanged}
            on:duplicate={onDuplicateLabel}
            on:remove={onRemoveLabel}
        />
    </Header>
</div>
