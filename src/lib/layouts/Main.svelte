<div
    class="flex h-full w-[280px] min-w-[280px] flex-col flex-nowrap items-stretch bg-theme-light dark:bg-theme-dark"
>
    <slot name="main" />
</div>
<div
    class="flex h-full w-full flex-row flex-nowrap items-start self-stretch bg-slate-100"
>
    <slot name="body" />
</div>
