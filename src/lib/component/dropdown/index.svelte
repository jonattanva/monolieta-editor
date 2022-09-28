<script>
    import outside from '$lib/action/outside';

    export /** @type {number} */ let x = 0;
    export /** @type {number} */ let y = 0;
    export /** @type {() => void} */ let close;
</script>

<div class="main" style="left:{x}px; top:{y}px" use:outside={close}>
    <slot />
</div>

<style>
    .main {
        align-content: space-around;
        background-color: var(--oc-white);
        border-radius: 0.25rem;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        padding: 0.5rem;
        position: absolute;
        width: 224px;
        z-index: 10;
    }
</style>
