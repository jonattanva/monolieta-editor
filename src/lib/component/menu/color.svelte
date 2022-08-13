<script lang="ts">
    import OpenColor from 'open-color/open-color.json';
    import outside from '$lib/action/outside';

    // prettier-ignore
    const colors = [
        OpenColor.black, OpenColor.gray[6], OpenColor.red[6],
        OpenColor.pink[6], OpenColor.grape[6], OpenColor.violet[6],
        OpenColor.indigo[6], OpenColor.blue[6], OpenColor.cyan[6],
        OpenColor.teal[6], OpenColor.green[6], OpenColor.lime[6],
        OpenColor.yellow[6], OpenColor.orange[6]
    ];

    export let close: () => void;
    export let save: (value: string) => void;
    export let value: string = '#333';
    export let x: number = 0;
    export let y: number = 0;

    function normalize(value: string) {
        return value.replace(/^#/, '');
    }

    $: prepare(value);

    function prepare(init: string) {
        value = normalize(init);
    }

    function handleSelect(event: Event) {
        const target = event.target as HTMLButtonElement;
        if (target && target.dataset.color) {
            value = normalize(target.dataset.color);
        }
    }

    function handleChange(event: Event) {
        const target = event.target as HTMLInputElement;
        if (target) {
            value = normalize(target.value);
        }
    }
</script>

<div class="main" style="left:{x}px; top:{y}px" use:outside={close}>
    <div class="palette">
        {#each colors as color (color)}
            <button
                class="color"
                data-color={color}
                on:click={handleSelect}
                style={`--color-picker: ${color}`}
            />
        {/each}
    </div>
    <div class="control">
        <div class="input">
            <div>#</div>
            <input type="text" maxlength="6" bind:value on:change={handleChange} />
        </div>
        <div class="action">
            <button on:click={() => save(value)}>Save</button>
        </div>
    </div>
</div>

<style>
    .main {
        background-color: var(--oc-white);
        border-radius: 4px;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 16px;
        position: absolute;
        width: 224px;
        z-index: 10;
    }

    .input {
        align-items: center;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        width: 100%;
    }

    .input > div {
        align-items: center;
        background-color: var(--oc-gray-3);
        border-radius: 4px 0 0 4px;
        color: var(--oc-gray-8);
        display: flex;
        height: 24px;
        justify-content: center;
        width: 30px;
    }

    .input > input {
        border-radius: 0 4px 4px 0;
        border: 1px solid var(--oc-gray-3);
        box-sizing: border-box;
        color: inherit;
        height: 24px;
        padding: 6px 12px;
        width: 100%;
    }

    .palette {
        align-content: space-around;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 4px;
        justify-content: flex-start;
    }

    .palette > .color {
        width: 24px;
        height: 24px;
    }

    .palette button {
        background-color: var(--color-picker);
        border-radius: 4px;
        border: 1px solid transparent;
        cursor: pointer;
        height: 24px;
        width: 24px;
    }

    .action {
        align-content: center;
        display: flex;
        justify-content: flex-end;
    }

    .action button {
        background-color: var(--accent-color);
        border-radius: 4px;
        border: 1px solid var(--accent-color);
        color: var(--oc-white);
        height: 24px;
        min-width: 56px;
    }

    .action button:hover {
        background-color: var(--accent-color-dark);
        cursor: pointer;
    }

    .control {
        align-items: center;
        display: flex;
        flex-wrap: nowrap;
        gap: 8px;
    }
</style>
