<script lang="ts">
    import Dropdown from '$lib/components/dropdown';
    import outside from '$lib/outside';
    import { KEY_FORMAT, KEY_EMPTY } from '$lib/constant';
    import { createEventDispatcher } from 'svelte';
    import { fade } from 'svelte/transition';
    import { translate } from '$lib/stores/locale';

    import type { Query } from '$lib/type';

    export let query: Query | null = null;

    const dispatch = createEventDispatcher();

    let isOpenMenu = false;

    const onOpenMenu = () => {
        isOpenMenu = !isOpenMenu;
    };

    const onCloseMenu = () => {
        isOpenMenu = false;
    };

    const onFormat = () => {
        const current = query || {};
        dispatch('change', {
            ...current,
            groupBy: query?.groupBy !== KEY_FORMAT ? KEY_FORMAT : KEY_EMPTY
        });
    };
</script>

<Dropdown.Item on:click={onOpenMenu}>
    <Dropdown.Label>
        {$translate('Group by')}
    </Dropdown.Label>
    {#if isOpenMenu}
        <div
            class="absolute left-16"
            transition:fade={{ delay: 15, duration: 60 }}
            use:outside={onCloseMenu}
        >
            <Dropdown.Main>
                <Dropdown.Section>
                    <Dropdown.Header>{$translate('Metadata')}</Dropdown.Header>
                    <Dropdown.Item
                        on:click={onFormat}
                        selected={query?.groupBy === KEY_FORMAT}
                    >
                        <Dropdown.Label>{$translate('Format')}</Dropdown.Label>
                    </Dropdown.Item>
                </Dropdown.Section>
            </Dropdown.Main>
        </div>
    {/if}
</Dropdown.Item>
