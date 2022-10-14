<script>
    /**
     * @type {boolean}
     */
    export let multiple = false;

    /**
     * @type {string[]}
     */
    export let accept = [];
</script>

<input class="hidden" type="file" {multiple} accept={accept.join(',')} on:change />
