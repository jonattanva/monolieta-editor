<script lang="ts">
    import Color from '$lib/component/picker/Color.svelte';
    import More from '$lib/component/action/More.svelte';

    export let color: string = '333';
    export let placeholder: string = 'Enter label name';
    export let value: string = '';
</script>

<div class="main">
    <div class="color">
        <Color {color} />
    </div>
    <input type="text" autocomplete="off" {placeholder} {value} />
    <div class="more">
        <More tabindex={-1} click={() => {}} />
    </div>
</div>

<style>
    .main {
        position: relative;
        width: 100%;
    }

    .color {
        align-items: center;
        background: transparent;
        box-sizing: border-box;
        display: flex;
        height: 38px;
        justify-content: center;
        position: absolute;
        width: 38px;
    }

    input {
        background-color: var(--oc-gray-2);
        border-radius: 4px;
        border: 1px solid var(--oc-gray-2);
        box-sizing: border-box;
        color: inherit;
        font-family: inherit;
        font-size: inherit;
        outline: none;
        height: 38px;
        padding: 8px 42px;
        width: 100%;
    }

    input:hover,
    input:focus {
        background-color: var(--white-color);
        border-color: var(--white-color);
    }

    input:focus {
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
    }

    .more:hover,
    input:hover + .more {
        visibility: visible;
    }

    .more {
        align-items: center;
        display: flex;
        height: 100%;
        justify-content: center;
        position: absolute;
        right: 8px;
        top: 0;
        visibility: hidden;
    }
</style>
