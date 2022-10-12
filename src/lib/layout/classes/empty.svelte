<script lang="ts">
    import Image from '$lib/assets/label.svelte';
</script>

<div class="flex flex-col gap-4">
    <div class="flex items-center justify-center">
        <Image />
    </div>
    <div class="flex flex-col items-center justify-center gap-2">
        <p class="text-center text-base font-medium">
            A label that gives information about your annotation
        </p>
        <button
            class="cursor-pointer text-center text-accent hover:underline focus:underline focus:outline-none"
            on:click
        >
            New label
        </button>
    </div>
</div>
