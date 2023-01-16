<script lang="ts">
    import '../app.css';
    import { onMount } from 'svelte';

    let init = false;
    onMount(async () => {
        init = true;
    });
</script>

<div class="relative flex h-screen w-screen flex-row flex-nowrap bg-transparent" data-init={init}>
    <slot />
</div>
