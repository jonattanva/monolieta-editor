<script lang="ts">
    import Body from './body.svelte';
    import Header from './header.svelte';
    import store from '$lib/store/resource';
    import { nanoid } from 'nanoid';

    export let items: Monolieta.Resources = [];
    export let selected: Monolieta.Resource | null = null;

    let fileInput: HTMLInputElement | null = null;

    const onResource = () => {
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
            token: nanoid(),
            // TODO: REMOVE LINE!
            annotations: [
                {
                    id: nanoid(),
                    createdAt: Date.now(),
                    updatedAt: Date.now(),
                    position: [50, 100, 100, 50],
                    type: 'rect'
                }
            ]
        });

        if (fileInput) {
            fileInput.value = '';
        }
    };
</script>

<Header on:labels on:resources={onResource} itemCount={items.length} />

<Body collection={items} on:click {selected} />

<input
    class="hidden"
    type="file"
    multiple={false}
    accept="image/*"
    on:change={onFileSelected}
    bind:this={fileInput}
/>
