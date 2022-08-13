<script lang="ts">
    import Resource from '$lib/assets/resource.svelte';
    import Label from '$lib/assets/label.svelte';

    export let context: Monolieta.Context | null = null;
    export let click: (event: MouseEvent) => void;
</script>

<nav class="main">
    <div class="logo" title="Monolieta">
        <h1>M</h1>
    </div>
    <div class="option">
        <div
            class:selected={context === 'resource'}
            class="action"
            data-key="resource"
            data-testid="manager-resource"
            on:click={click}
            title="Resources"
        >
            <Resource />
        </div>
        <div
            class:selected={context === 'label'}
            class="action"
            data-key="label"
            data-testid="manager-label"
            on:click={click}
            title="Labels"
        >
            <Label />
        </div>
    </div>
</nav>

<style>
    .main {
        align-items: center;
        background-color: var(--oc-gray-9);
        box-sizing: border-box;
        color: var(--oc-gray-6);
        display: flex;
        flex-direction: column;
        gap: 56px;
        padding: 42px 8px;
        width: 80px;
    }

    .logo {
        background-color: var(--accent-color);
        border-radius: 4px;
        height: 52px;
        width: 52px;
    }

    .logo h1 {
        align-items: center;
        color: var(--oc-white);
        cursor: default;
        display: flex;
        font-family: var(--font-sigmar);
        font-size: 32px;
        height: 100%;
        justify-content: center;
        margin: 0;
        user-select: none;
    }

    .option {
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 12px;
        height: 100%;
        justify-content: flex-start;
        user-select: none;
        width: 100%;
    }

    .action {
        align-items: center;
        border-radius: 4px;
        box-sizing: border-box;
        color: var(--oc-gray-5);
        cursor: pointer;
        display: flex;
        flex-direction: column;
        height: 42px;
        justify-content: center;
        opacity: 0.7;
        padding: 8px;
        width: 42px;
    }

    .selected,
    .action:hover {
        background-color: var(--oc-gray-8);
        color: var(--oc-white);
        opacity: 1;
    }
</style>
