<script lang="ts">
    import Body from './body.svelte';
    import Header from './header.svelte';

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
        console.log('file', file);
    };
</script>

<Header on:labels on:place-resource={onPlaceResource} />

<Body />

<input
    class="hidden"
    type="file"
    multiple={false}
    on:change={onFileSelected}
    bind:this={fileInput}
/>
