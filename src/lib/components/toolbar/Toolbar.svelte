<script lang="ts">
    import Cursor from './Cursor.svelte';
    import square2Stack from '$lib/assets/image/square-2-stack.svg';
    import Action from './Action.svelte';
    import Separator from './Separator.svelte';
    import handRaised from '$lib/assets/image/hand-raised.svg';
</script>

<div
    class="flex w-full drop-shadow flex-row items-center gap-2 rounded-md border bg-white px-3 py-1.5"
>
    <Action src={handRaised} alt="Hand (panning tool)" />
    <Cursor active={true} />
    <Separator />
    <Action src={square2Stack} alt="Rect action" />
</div>
