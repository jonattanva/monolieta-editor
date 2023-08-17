<script lang="ts">
    import Dropdown from '$lib/components/dropdown';
    import Fab from '$lib/components/buttons/Fab.svelte';
    import bars from '$lib/assets/image/bars-3.svg';
    import change, { init, isLight } from '$lib/stores/theme';
    import folder from '$lib/assets/image/folder.svg';
    import moon from '$lib/assets/image/moon.svg';
    import outside from '$lib/outside';
    import photo from '$lib/assets/image/photo.svg';
    import sun from '$lib/assets/image/sun.svg';
    import tag from '$lib/assets/image/tag.svg';
    import { fade } from 'svelte/transition';
    import { insert } from '$lib/stores/resource';
    import { onMount } from 'svelte';
    import { translate } from '$lib/stores/locale';

    onMount(() => {
        init();
    });

    let isOpenMenu = false;
    let fileInput: HTMLInputElement | null = null;

    const onCloseMenu = () => {
        isOpenMenu = false;
    };

    const onOpenMenu = () => {
        isOpenMenu = !isOpenMenu;
    };

    const onFileSelected = (event: Event) => {
        const target = event.target as HTMLInputElement;
        if (!target.files) {
            return;
        }

        const [file] = target.files;
        insert(file);

        if (fileInput) {
            fileInput.value = '';
        }
    };

    const onImportResource = () => {
        if (fileInput) {
            fileInput.click();
        }
    };
</script>

<div class="w-full">
    <div class="flex w-full flex-nowrap items-center justify-between">
        <h1 class="title-primary select-none text-2xl">{$translate('Monolieta')}</h1>
        <div class="relative" use:outside={onCloseMenu}>
            <Fab src={bars} testid="menu" alt="Folder icon" on:click={onOpenMenu} />
            {#if isOpenMenu}
                <div class="absolute left-8" transition:fade={{ delay: 30, duration: 90 }}>
                    <Dropdown.Main>
                        <Dropdown.Section>
                            <Dropdown.Item>
                                <Dropdown.Icon src={folder} alt="Folder icon" />
                                <Dropdown.Label>
                                    {$translate('Open...')}
                                    <Dropdown.Shortcut>⌘ + O</Dropdown.Shortcut>
                                </Dropdown.Label>
                            </Dropdown.Item>
                            <Dropdown.Item on:click={onImportResource} testid="import resource">
                                <Dropdown.Icon src={photo} alt="Import icon" />
                                <Dropdown.Label>
                                    {$translate('Import resource')}
                                </Dropdown.Label>
                            </Dropdown.Item>
                        </Dropdown.Section>
                        <Dropdown.Separator>
                            <Dropdown.Header>{$translate('Manager')}</Dropdown.Header>
                            <Dropdown.Item>
                                <Dropdown.Icon src={tag} alt="Label icon" />
                                <Dropdown.Label>
                                    {$translate('Label')}
                                    <Dropdown.Shortcut>⌘ + L</Dropdown.Shortcut>
                                </Dropdown.Label>
                            </Dropdown.Item>
                        </Dropdown.Separator>
                        <Dropdown.Separator>
                            <Dropdown.Header>{$translate('Setting')}</Dropdown.Header>
                            <Dropdown.Item on:click={change}>
                                {#if $isLight}
                                    <Dropdown.Icon src={moon} alt="Dark mode icon" />
                                    <Dropdown.Label>
                                        {$translate('Dark mode')}
                                        <Dropdown.Shortcut>⇧ + ⌥ + D</Dropdown.Shortcut>
                                    </Dropdown.Label>
                                {:else}
                                    <Dropdown.Icon src={sun} alt="Light mode icon" />
                                    <Dropdown.Label>
                                        {$translate('Light mode')}
                                        <Dropdown.Shortcut>⇧ + ⌥ + D</Dropdown.Shortcut>
                                    </Dropdown.Label>
                                {/if}
                            </Dropdown.Item>
                        </Dropdown.Separator>
                    </Dropdown.Main>
                </div>
            {/if}
        </div>
    </div>
</div>

<input
    class="hidden"
    type="file"
    multiple={false}
    accept="image/*"
    on:change={onFileSelected}
    bind:this={fileInput}
/>
