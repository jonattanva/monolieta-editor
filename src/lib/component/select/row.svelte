<script lang="ts">
    import type { Option, Group } from '$lib/type';

    export let label: string;
    export let parent = '';
    export let selected: Option | Group | null = null;
    export let value: string | number;

    let classname = '';
    if (selected) {
        if (!parent) {
            if (value === selected.value) {
                classname = 'bg-indigo-100';
            }
        } else {
            if (parent === selected.value) {
                if ('options' in selected) {
                    const [option] = selected.options;
                    if (option.value === value) {
                        classname = 'bg-indigo-100';
                    }
                }
            }
        }
    }
</script>

<li class="relative cursor-default select-none text-gray-900 hover:bg-indigo-100 {classname}">
    <button class="w-full py-2 pl-3 pr-9" data-value={value} data-parent={parent} on:click>
        <div class="flex items-center">
            <span class="block truncate font-normal" title={label}>
                {label}
            </span>
        </div>
    </button>
</li>
