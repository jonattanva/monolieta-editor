<script lang="ts">
    import Cursor from './Cursor.svelte';
    import Hand from './Hand.svelte';
    import Rect from './Rect.svelte';
    import Separator from './Separator.svelte';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    const onClick = (event: MouseEvent) => {
        const target = event.currentTarget as HTMLButtonElement;
        const action = target.dataset.action;
        if (action) {
            dispatch('click', action);
        }
    };
</script>

<div
    class="flex w-full flex-row items-center gap-2 rounded-md border bg-white px-3 py-1.5 drop-shadow"
>
    <Hand on:click={onClick} />
    <Cursor on:click={onClick} active={true} />
    <Separator />
    <Rect on:click={onClick} />
</div>
