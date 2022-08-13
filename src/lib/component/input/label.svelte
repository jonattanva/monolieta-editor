<script lang="ts">
    export let item: Monolieta.Label;
    export let change: (item: Monolieta.Label) => void;
    export let color: (event: Event, item: Monolieta.Label) => void;
    export let placeholder: string = 'Enter label name';
    export let test: string | null = null;

    function handleNameChange(event: Event) {
        const target = event.target as HTMLInputElement;
        if (target) {
            item.name = target.value;
            change(item);
        }
    }
</script>

<div class="main">
    <div class="color">
        <button
            on:click={(event) => color(event, item)}
            style="--color-picker: {item.color}"
            tabindex="-1"
        />
    </div>
    <input
        autocomplete="off"
        data-testid={test}
        on:change={handleNameChange}
        type="text"
        value={item.name}
        {placeholder}
    />
    <div class="more">
        <!--<More tabindex={-1} click={handleMoreOpen} />-->
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
        background-color: var(--oc-gray-0);
        border-radius: 4px;
        border: 1px solid var(--oc-gray-0);
        box-sizing: border-box;
        color: inherit;
        font-family: inherit;
        font-size: inherit;
        height: 38px;
        outline: none;
        padding: 8px 42px;
        transition: background-color, border-color 0.2s ease-in-out;
        width: 100%;
    }

    input:hover,
    input:focus {
        background-color: var(--oc-white);
        border: 1px solid var(--oc-gray-2);
    }

    input:focus {
        border: 1px solid var(--oc-gray-4);
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

    .color button {
        background-color: var(--color-picker);
        border-radius: 4px;
        border: 1px solid transparent;
        cursor: pointer;
        height: 24px;
        width: 24px;
    }
</style>
