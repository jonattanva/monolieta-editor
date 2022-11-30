<script lang="ts">
    import ArrowDownTray from '$lib/component/icon/arrow-down-tray.svelte';
    import ArrowUpTray from '$lib/component/icon/arrow-up-tray.svelte';
    import BarsArrowDown from '$lib/component/icon/bars-arrow-down.svelte';
    import BarsArrowUp from '$lib/component/icon/bars-arrow-up.svelte';
    import Dropdown from '$lib/component/dropdown/index.svelte';
    import Item from '$lib/component/dropdown/item.svelte';
    import Section from '$lib/component/dropdown/section.svelte';
</script>

<div class="absolute top-9 right-0">
    <Dropdown>
        <Section>
            <Item>
                <span class="mr-2 h-5 w-5">
                    <BarsArrowDown />
                </span>
                Ascending
            </Item>
            <Item>
                <span class="mr-2 h-5 w-5">
                    <BarsArrowUp />
                </span>
                Descending
            </Item>
        </Section>
        <div class="w-full border-t border-slate-400/20 py-3 px-3.5">
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
