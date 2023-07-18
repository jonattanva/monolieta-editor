<script lang="ts">
    import ArrowDownTray from '$lib/component/icon/arrow-down-tray.svelte';
    import ArrowUpTray from '$lib/component/icon/arrow-up-tray.svelte';
    import BarsArrowDown from '$lib/component/icon/bars-arrow-down.svelte';
    import BarsArrowUp from '$lib/component/icon/bars-arrow-up.svelte';
    import Dropdown from '$lib/component/dropdown/index.svelte';
    import Item from '$lib/component/dropdown/item.svelte';
    import Section from '$lib/component/dropdown/section.svelte';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    const onAscending = (event: Event) => dispatch('ascending', event);

    const onDescending = (event: Event) => dispatch('descending', event);
</script>

<div class="absolute right-0 top-9">
    <Dropdown>
        <Section>
            <Item on:click={onAscending}>
                <span class="mr-2 h-5 w-5">
                    <BarsArrowDown />
                </span>
                Ascending 
            </Item>
            <Item on:click={onDescending}>
                <span class="mr-2 h-5 w-5">
                    <BarsArrowUp />
                </span>
                Descending
            </Item>
        </Section>
        <div class=" w-full border-t border-slate-400/20 px-3.5 py-3">
            <Item>
                <span class="mr-2 h-5 w-5">
                    <ArrowDownTray />
                </span>
                Import
            </Item>
            <Item>
                <span class="mr-2 h-5 w-5">
                    <ArrowUpTray />
                </span>
                Export
            </Item>
        </div>
    </Dropdown>
</div>
