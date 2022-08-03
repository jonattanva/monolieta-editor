<script lang="ts">
    export let autocomplete: string = 'off';
    export let placeholder: string = '';
    export let test: string | null = null;
</script>

<input type="text" {autocomplete} {placeholder} data-testid={test} />

<style>
    input {
        border-radius: 4px;
        border: 1px solid var(--oc-gray-3);
        box-sizing: border-box;
        color: inherit;
        font-family: inherit;
        font-size: inherit;
        height: 32px;
        padding: 6px 12px;
        width: 100%;
    }
</style>
