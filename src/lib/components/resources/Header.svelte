<script lang="ts">
    import Fab from '../buttons/Fab.svelte';
    import Filter from './Filter.svelte';
    import Search from '../inputs/Search.svelte';
    import filter from '$lib/assets/image/filter.svg';

    export let placeholder = '';
</script>

<div class="relative flex flex-nowrap items-center gap-2">
    <Search {placeholder} />
    <div class="shrink">
        <Fab image={filter} />
        <div class="absolute right-0 top-9 text-gray-600">
            <Filter />
        </div>
    </div>
</div>
