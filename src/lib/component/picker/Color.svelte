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

    export let color: string = '#333';
    export let test: string | null = null;

    let open = false;

    function handleToggle() {
        open = !open;
    }

    function handleClose() {
        open = false;
    }

    $: style = `--color-picker: ${color.includes('#') ? color : `#${color}`}`;

    function handleSelect(event: Event) {
        const target = event.target as HTMLButtonElement;
        if (target.dataset.color) {
            const current = target.dataset.color;
            if (!current.includes('#')) {
                color = current;
                return;
            }
            color = current.substring(1);
        }
    }
</script>

<div use:outside={handleClose}>
    <button {style} on:click={handleToggle} data-test={test} tabindex="-1"/>
    {#if open}
        <div class="modal">
            <div class="input">
                <div>#</div>
                <input type="text" maxlength="6" bind:value={color} />
            </div>
            <div class="palette">
                {#each colors as color}
                    <button
                        class="color"
                        data-color={color}
                        on:click={handleSelect}
                        style={`--color-picker: ${color}`}
                    />
                {/each}
            </div>
        </div>
    {/if}
</div>

<style>
    button {
        background-color: var(--color-picker);
        border-radius: 4px;
        border: 1px solid transparent;
        cursor: pointer;
        height: 24px;
        width: 24px;
    }

    .modal {
        border-radius: 4px;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
        box-sizing: border-box;
        display: flex;
        background-color: #fff;
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
        height: 30px;
        justify-content: center;
        width: 30px;
    }

    .input > input {
        border-radius: 0 4px 4px 0;
        border: 1px solid var(--oc-gray-3);
        box-sizing: border-box;
        color: inherit;
        height: 30px;
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
</style>
