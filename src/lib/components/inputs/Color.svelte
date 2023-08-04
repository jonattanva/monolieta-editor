<script lang="ts">
    export let value = '6200EE';

    const normalize = (value: string) => {
        return value.replace(/^#/, '');
    };

    const prepare = (init: string) => {
        value = normalize(init);
    };

    $: prepare(value);

    const format = (event: Event) => {
        const target = event.target as HTMLInputElement;
        value = target?.value?.substring(0, 6);
    };
</script>

<div class="relative flex w-full items-center justify-start">
    <div class="absolute ml-2 flex h-7 w-7 items-center justify-center bg-transparent">
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
        class="h-7 w-full rounded border bg-transparent pl-10 pr-2 uppercase text-font-light transition-colors focus:border-2 focus:outline-none dark:border-shape-dark dark:text-font-dark"
        on:change
        type="text"
        on:blur={format}
        aria-label="Input color"
        {value}
    />
</div>
