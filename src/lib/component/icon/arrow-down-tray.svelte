<script lang="ts">
    export let height: string | number = '100%';
    export let width: string | number = '100%';
</script>

<svg
    fill="none"
    {height}
    stroke-width="1.5"
    stroke="currentColor"
    viewBox="0 0 24 24"
    {width}
    xmlns="http://www.w3.org/2000/svg"
>
    <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
    />
</svg>
