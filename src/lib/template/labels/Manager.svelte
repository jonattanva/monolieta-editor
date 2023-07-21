<script lang="ts">
    import Collection from './Labels.svelte';
    import Dropdown from '$lib/components/dropdown';
    import Header from './Header.svelte';
    import Helper from './Helper.svelte';
    import Pallete from '$lib/components/Pallete.svelte';
    import Section from '$lib/components/dropdown/Section.svelte';
    import Sort from '$lib/template/common/Sort.svelte';
    import trash from '$lib/assets/image/trash.svg';
    import { createEventDispatcher } from 'svelte';
    import { insert, update, values, search, sort } from '$lib/stores/label';
    import { translate } from '$lib/stores/locale';

    import type { Label } from '$lib/type';

    const dispatch = createEventDispatcher();
    const position = {
        x: 0,
        y: 0
    };

    let isOpenRowMenu = false;
    let isOpenPallete = false;

    let message: string | null = null;
    let selected: Label | null = null;

    $: labels = $values;

    const onSelected = (custom: CustomEvent) => {
        const { event, label } = custom.detail;

        selected = label;
        position['x'] = event.clientX;
        position['y'] = event.clientY;
    };

    const onChange = (custom: CustomEvent) => {
        update(custom.detail.value);
    };

    const onColorChanged = (custom: CustomEvent) => {
        const color = custom.detail.value;
        if (selected) {
            selected.color = color;
            update(selected);

            onClosePallete();
        }
    };

    const onSearch = (event: CustomEvent) => {
        const value = event.detail.value;
        labels = $search(event.detail.value);

        // prettier-ignore
        message = value.length > 0 && labels.length == 0
            ? $translate('No labels found')
            : null;
    };

    const onRemove = () => {
        if (selected) {
            dispatch('remove', selected);
        }
        onCloseRowMenu();
    };

    const onAscending = () => {
        labels = $sort('asc');
    };

    const onDescending = () => {
        labels = $sort('desc');
    };

    const onOpenRowMenu = (custom: CustomEvent) => {
        onSelected(custom);
        isOpenRowMenu = true;
        onClosePallete();
    };

    const onCloseRowMenu = () => {
        isOpenRowMenu = false;
    };

    const onOpenPallete = (custom: CustomEvent) => {
        onSelected(custom);
        isOpenPallete = true;
        onCloseRowMenu();
    };

    const onClosePallete = () => {
        isOpenPallete = false;
    };
</script>

<div class="flex w-full flex-col gap-4 text-base">
    <div class="px-6">
        <h2 class="title-primary">
            {$translate('Label')}
        </h2>
        <div class="title-secondary">
            {$translate('The label names you use to describe the objects in the resources')}
        </div>
    </div>
    <Header on:create={insert} on:search={onSearch} placeholder={$translate('Search')}>
        <Section>
            <Sort on:asc={onAscending} on:desc={onDescending} />
        </Section>
    </Header>
    <div class="px-6">
        {#if labels.length === 0}
            <Helper {message} on:click={insert} />
        {:else}
            <Collection
                on:change={onChange}
                on:color={onOpenPallete}
                on:menu={onOpenRowMenu}
                placeholder={$translate('Enter label name')}
                {labels}
            />
        {/if}
    </div>
</div>

{#if isOpenPallete}
    <div class="absolute left-auto" style="top:{position.y}px">
        <Pallete on:close={onClosePallete} on:click={onColorChanged} />
    </div>
{/if}

{#if isOpenRowMenu}
    <div class="absolute right-0" style="top:{position.y}px">
        <Dropdown.Main>
            <Dropdown.Section>
                <Dropdown.Item on:click={onRemove}>
                    <Dropdown.Icon src={trash} alt="Trash icon" />
                    {$translate('Delete')}
                </Dropdown.Item>
            </Dropdown.Section>
        </Dropdown.Main>
    </div>
{/if}
