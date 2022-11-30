<script lang="ts">
    import Header from './header.svelte';
    import Body from './body.svelte';
    import store, { template } from '$lib/store/label';

    export let items: Monolieta.Labels = [];

    let collection: Monolieta.Labels = [];

    const prepare = (values: Monolieta.Labels) => {
        store.init(values);
    };

    const onCreateNewLabel = () => {
        store.add(template());
    };

    $: prepare(items);

    store.subscribe((values) => {
        collection = values;
    });
</script>

<div class="flex w-full flex-col gap-4">
    <Header title="Labels" on:close on:create={onCreateNewLabel}>
        <Body {collection} />
    </Header>
</div>
