<div class="flex h-full w-[280px] min-w-[280px] flex-col flex-nowrap items-stretch">
    <slot name="main" />
</div>
<div
    class="flex h-full w-full flex-row flex-nowrap items-start justify-center self-stretch bg-slate-100"
>
    <slot name="body" />
</div>
