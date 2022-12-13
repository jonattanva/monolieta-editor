<script lang="ts">
    import { imageReader } from '$lib/file';

    export let item: Monolieta.Resource;

    let source: string;

    $: prepare(item);

    const prepare = async (item: Monolieta.Resource) => {
        source = await imageReader(item.source);
    };
</script>

<div class="h-32 w-32" role="img">
    <img class="block h-full w-full object-cover p-0" loading="lazy" src={source} alt="" />
</div>
