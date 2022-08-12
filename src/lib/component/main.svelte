<script lang="ts">
    import Label from '$lib/template/label.svelte';
    import Navigation from '$lib/template/navigation.svelte';

    export let context: Monolieta.Context | null = null;
    let open: boolean = false;

    function handlePanel(event: MouseEvent) {
        const target = event.currentTarget as HTMLDivElement;
        const current = target.dataset.key as Monolieta.Context;
        if (current) {
            open = current === context ? !open : true;
            context = current;
            if (!open) {
                context = null;
            }
        }
    }
</script>

<div class="main">
    <Navigation click={handlePanel} {context} />
    <div class="panel" class:close={open === false}>
        {#if context === 'resource'}
            resource
        {:else if context === 'label'}
            <Label />
        {/if}
    </div>
    <div class="body">
        <slot />
    </div>
</div>

<style>
    .main {
        display: flex;
        flex-direction: row;
        height: 100vh;
        position: relative;
        width: 100%;
    }

    .panel {
        background-color: var(--oc-gray-0);
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        height: 100%;
        max-width: 320px;
        padding: 16px;
        visibility: visible;
        width: 100%;
    }

    .close {
        min-width: 0;
        padding: 0;
        visibility: hidden;
        width: 0;
    }

    .body {
        box-sizing: border-box;
        padding: 16px;
    }
</style>
