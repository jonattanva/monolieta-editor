<script lang="ts">
    import Dropdown from '$lib/component/dropdown/index.svelte';
    import Item from '$lib/component/dropdown/item.svelte';
    import More from '$lib/component/action/more.svelte';
    import outside from '$lib/action/outside';
    import store from '$lib/store/label';

    export let open: boolean = false;
    export let title: string = 'More';

    const onCloseOption = () => {
        open = false;
    };

    const onOpenOption = () => {
        open = !open;
    };

    const onAscending = () => {
        store.sort((a: Monolieta.Label, b: Monolieta.Label) => {
            return a.name.localeCompare(b.name);
        });
        onCloseOption();
    };

    const onDescending = () => {
        store.sort((a: Monolieta.Label, b: Monolieta.Label) => {
            return b.name.localeCompare(a.name);
        });
        onCloseOption();
    };
</script>

<div use:outside={onCloseOption}>
    <More on:click={onOpenOption} {title} />
    {#if open}
        <div class="absolute top-9 right-0">
            <Dropdown>
                <div class="w-full py-3 px-3.5">
                    <Item click={onAscending}>
                        <!-- Heroicon name: outline/bars-arrow-down -->
                        <svg
                            class="mr-2 h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
                            />
                        </svg>
                        Ascending
                    </Item>
                    <Item click={onDescending}>
                        <!-- Heroicon name: outline/bars-arrow-up -->
                        <svg
                            class="mr-2 h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"
                            />
                        </svg>
                        Descending
                    </Item>
                </div>
                <div class="border-t border-slate-400/20 w-full py-3 px-3.5">
                    <Item click={() => {}}>
                        <!-- Heroicon name: outline/arrow-down-tray -->
                        <svg
                            class="mr-2 h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                            />
                        </svg>

                        Import
                    </Item>
                    <Item click={() => {}}>
                        <!-- Heroicon name: outline/arrow-up-tray -->
                        <svg
                            class="mr-2 h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                            />
                        </svg>
                        Export
                    </Item>
                </div>
            </Dropdown>
        </div>
    {/if}
</div>
