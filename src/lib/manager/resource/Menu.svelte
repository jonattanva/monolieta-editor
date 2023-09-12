<script lang="ts">
    import Dropdown from '$lib/components/dropdown';
    import Fab from '$lib/components/buttons/Fab.svelte';
    import bars from '$lib/assets/image/bars-3.svg';
    import outside from '$lib/outside';
    import photo from '$lib/assets/image/photo.svg';
    import shortcut, { KEY_ESC } from '$lib/shortcut';
    import { createEventDispatcher } from 'svelte';
    import { translate } from '$lib/stores/locale';

    const dispatch = createEventDispatcher();

    export let accept: string | null = 'image/*';
    
    let isOpenMenu = false;
    let fileInput: HTMLInputElement | null = null;

    const onCloseMenu = () => {
        isOpenMenu = false;
    };

    const onOpenMenu = () => {
        isOpenMenu = !isOpenMenu;
    };

    const onImportResource = () => {
        if (fileInput) {
            fileInput.click();
        }
    };

    const onFileSelected = (event: Event) => {
        const target = event.target as HTMLInputElement;
        if (!target.files) {
            return;
        }

        const [file] = target.files;
        dispatch('import', file);

        if (fileInput) {
            fileInput.value = '';
        }
    };
</script>

<div class="w-full">
    <div class="flex w-full flex-nowrap items-center justify-between">
        <h1 class="title-primary select-none text-2xl">
            {$translate('Monolieta')}
        </h1>
        <div
            class="relative"
            use:outside={onCloseMenu}
            use:shortcut={{ key: [KEY_ESC], callback: onCloseMenu }}
        >
            <Fab
                alt="Folder icon"
                on:click={onOpenMenu}
                src={bars}
                testid="menu"
            />
            {#if isOpenMenu}
                <div class="absolute left-8 z-20">
                    <Dropdown.Main>
                        <Dropdown.Section>
                            <Dropdown.Item
                                on:click={onImportResource}
                                testid="import resource"
                            >
                                <Dropdown.Icon src={photo} alt="Import icon" />
                                <Dropdown.Label>
                                    {$translate('Import resource')}
                                </Dropdown.Label>
                            </Dropdown.Item>
                        </Dropdown.Section>
                    </Dropdown.Main>
                </div>
            {/if}
        </div>
    </div>
</div>

<input
    bind:this={fileInput}
    class="hidden"
    multiple={false}
    on:change={onFileSelected}
    type="file"
    {accept}
/>
