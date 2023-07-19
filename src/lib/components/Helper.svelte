<script lang="ts">
    export let action = '';
    export let message = '';
</script>

<div class="px-6 pt-4 text-base">
    <div class="flex flex-col gap-4">
        <div class="flex items-center justify-center">
            <slot />
        </div>
        <div class="flex flex-col items-center justify-center gap-2">
            <p class="title-accent">
                {message}
            </p>
            {#if action}
                <button
                    class="cursor-pointer text-center text-primary hover:underline focus:underline focus:outline-none"
                    type="button"
                    on:click
                >
                    {action}
                </button>
            {/if}
        </div>
    </div>
</div>
