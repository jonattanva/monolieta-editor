<script lang="ts">
    export let value = 'E5E5E5';

    const normalize = (value: string) => value.replace(/^#/, '');

    const prepare = (init: string) => (value = normalize(init));

    $: prepare(value);
</script>

<div class="relative flex w-full items-center justify-start">
    <div class="absolute flex h-7 w-7 items-center justify-center bg-transparent">
        <button
            class="h-[18px] w-[18px] rounded border border-transparent"
            on:click
            style="background-color: #{value}"
            tabindex="-1"
            type="button"
        />
    </div>
    <input
        autocomplete="off"
        class="h-7 w-full rounded border bg-gray-50 pl-8 pr-2 uppercase transition-colors hover:border-gray-300 focus:border-gray-300 focus:outline-none"
        on:change
        type="text"
        {value}
    />
</div>
