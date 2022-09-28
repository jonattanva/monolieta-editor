<script>
    import Classes from '$lib/layout/classes/index.svelte';

    const items = [
        {
            id: '1',
            createdAt: Date.now(),
            updatedAt: Date.now(),
            name: 'person',
            color: '#3d3d3d',
            token: '1'
        },
        {
            id: '2',
            createdAt: Date.now(),
            updatedAt: Date.now(),
            name: 'dog',
            color: '#d2d42d',
            token: '2'
        }
    ];
</script>

<Classes items={[]} />
