<script lang="ts">
    export let checked = false;
    export let testid: string | null = '';
    export let title: string = '';
</script>

<label class="peer h-7 w-7 cursor-pointer" data-testid={testid} {title}>
    <input class="peer sr-only" type="radio" name="action" on:change {checked} />
    <div
        class="flex h-full w-full items-center justify-center rounded peer-checked:bg-gray-200 peer-hover:bg-gray-200"
    >
        <span class="h-5 w-5 text-gray-700">
            <slot />
        </span>
    </div>
</label>
