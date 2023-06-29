<script lang="ts">
    import Body from './body.svelte';
    import Header from './header.svelte';
    import store, { template } from '$lib/store/label';

    import type { Labels, Label } from '$lib/type';

    export let message: string | null = null;
    export let items: Labels = [];

    const onCreateNewLabel = () => {
        store.add(template());
    };

    const onLabelChanged = (custom: CustomEvent) => {
        store.set(custom.detail.label);
    };

    const onDuplicateLabel = (custom: CustomEvent) => {
        store.duplicate(custom.detail.label);
    };

    const onDescending = () => {
        store.sort((a: Label, b: Label) => {
            return b.name.localeCompare(a.name);
        });
    };

    const onAscending = () => {
        store.sort((a: Label, b: Label) => {
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

<div class="flex w-full flex-col">
    <Header
        on:ascending={onAscending}
        on:close
        on:create={onCreateNewLabel}
        on:descending={onDescending}
        on:search={onSearch}
        title="Labels"
    >
        <Body
            collection={items}
            on:change={onLabelChanged}
            on:create={onCreateNewLabel}
            on:duplicate={onDuplicateLabel}
            on:remove
            {message}
        />
    </Header>
</div>
