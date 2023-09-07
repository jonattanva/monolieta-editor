<script lang="ts">
    import { translate } from '$lib/stores/locale';
    import type { Resources } from '$lib/type';

    export let resources: Resources = [];
</script>

<div class="flex flex-nowrap items-center justify-end gap-2">
    {$translate('Showing {{count}} of {{count}} items', {
        count: `${resources.length}`
    })}
</div>
