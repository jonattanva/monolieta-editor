<script lang="ts">
    export let value = '6200EE';

    const normalize = (value: string) => {
        return value.replace(/^#/, '');
    };

    const prepare = (init: string) => {
        value = normalize(init);
    };

    $: prepare(value);
</script>

<div class="relative flex w-full items-center justify-start">
    <div class="absolute flex h-7 w-7 items-center justify-center bg-transparent">
        <button
            class="h-[18px] w-[18px] rounded border border-transparent active:scale-95"
            on:click|stopPropagation|preventDefault
            style="background-color: #{value}"
            tabindex="-1"
            type="button"
            aria-label="Select color"
        />
    </div>
    <input
        autocomplete="off"
        class="bg-accent h-7 w-full rounded border pl-8 pr-2 uppercase transition-colors hover:border-accent-dark focus:border-accent-dark focus:outline-none"
        on:change
        type="text"
        aria-label="Color"
        {value}
    />
</div>
