<script lang="ts">
    import Body from './body.svelte';
    import Header from './header.svelte';
    import store from '$lib/store/resource';
    import { nanoid } from 'nanoid';

    export let items: Monolieta.Resources = [];

    let fileInput: HTMLInputElement | null = null;

    const onPlaceResource = () => {
        if (fileInput) {
            fileInput.click();
        }
    };

    const onFileSelected = (event: Event) => {
        const target = event.target as HTMLInputElement;
        if (!target.files) {
            return;
        }

        const [file] = target.files;
        store.add({
            id: nanoid(),
            createdAt: Date.now(),
            updatedAt: Date.now(),
            source: file,
            name: file.name,
            size: file.size,
            type: file.type,
            token: nanoid()
        });

        if (fileInput) {
            fileInput.value = '';
        }
    };
</script>

<Header on:labels on:place-resource={onPlaceResource} itemCount={items.length} />

<Body collection={items} />

<input
    class="hidden"
    type="file"
    multiple={false}
    on:change={onFileSelected}
    bind:this={fileInput}
/>
