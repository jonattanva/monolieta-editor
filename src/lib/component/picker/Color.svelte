<script lang="ts">
    import OpenColor from 'open-color/open-color.json';
    import outside from '$lib/action/outside';

    // prettier-ignore
    const colors = [
        OpenColor.gray[6], OpenColor.red[6], OpenColor.pink[6],
        OpenColor.grape[6], OpenColor.violet[6], OpenColor.indigo[6],
        OpenColor.blue[6], OpenColor.cyan[6], OpenColor.teal[6],
        OpenColor.green[6], OpenColor.yellow[6], OpenColor.orange[6]
    ];

    export let color: string = '#333';

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
    <button {style} on:click={handleToggle} />
    {#if open}
        <div class="dropdown">
            <div class="input">
                <div>#</div>
                <input type="text" maxlength="6" bind:value={color} />
            </div>
            <div class="color">
                {#each colors as color}
                    <button
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
        border: 1px solid var(--color-picker);
        cursor: pointer;
        height: 30px;
        width: 30px;
    }

    .dropdown {
        background-color: var(--oc-gray-1);
        border-radius: 4px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 8px;
        width: 240px;
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
        height: 30px;
        padding: 0 4px;
        width: 100%;
    }

    .color {
        align-content: space-around;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 4px;
        justify-content: space-between;
    }
</style>
