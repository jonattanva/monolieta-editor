<script lang="ts">
    export let checked = false;
    export let testid: string | null = '';
</script>

<label class="relative inline-flex cursor-pointer items-center" data-testid={testid}>
    <input type="checkbox" class="peer sr-only" on:change {checked} />
    <div
        class="peer h-7 w-12 rounded-full bg-gray-200 after:absolute after:left-[4px] after:top-[4px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:border peer-checked:border-accent-dark peer-checked:bg-accent peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-gray-300"
    />
</label>
