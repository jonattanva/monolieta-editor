<script lang="ts">
    import Image from '$lib/assets/label.svelte';
</script>

<div class="flex flex-col gap-4">
    <div class="flex items-center justify-center">
        <Image />
    </div>
    <div class="flex flex-col gap-2 items-center justify-center">
        <p class="text-base font-medium text-center">
            A label that gives information about your annotation
        </p>
        <p class="color-accent text-center hover:underline cursor-pointer" on:click>New label</p>
    </div>
</div>
