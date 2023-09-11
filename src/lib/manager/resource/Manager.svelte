<script lang="ts">
    import Collection from './Resources.svelte';
    import Helper from '$lib/components/Helper.svelte';
    import Information from './Information.svelte';
    import Menu from './Menu.svelte';
    import { insert, values } from '$lib/stores/resource';
    import { translate } from '$lib/stores/locale';

    export let entity: string | null = null;

    $: resources = $values;

    const onImport = (event: CustomEvent) => {
        insert(event.detail);
    };
</script>

<div class="px-4 pt-6">
    <Menu on:import={onImport} />
</div>
<div class="w-full p-4">
    <div class="flex flex-col gap-4">
        <Information {resources} />
        <div>
            {#if resources.length > 0}
                <Collection {resources} {entity} selectable={true} on:click />
            {:else}
                <Helper
                    message={$translate('You have not yet started a project')}
                />
            {/if}
        </div>
    </div>
</div>
