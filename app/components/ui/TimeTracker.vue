<template>
    <div class="min-w-0 bg-primary-900 rounded-shell shadow-card p-4">
        <h3 class="text-sm text-inverse">Time Tracker</h3>
        <div class="flex items-center justify-center gap-4 flex-col mt-8">
            <div class="flex items-center justify-center gap-2">
                <span class="text-inverse text-[2rem] font-number font-medium">01:24:08</span>
            </div>
            <div class="flex items-center justify-center gap-2">
                <button aria-label="Pause timer" class="flex items-center bg-surface hover:bg-surface-hover rounded-full justify-center size-11 text-sm">
                    <Icon name="solar:pause-bold" class="size-4 text-primary-800" />
                </button>
                <button aria-label="Stop timer" class="flex items-center bg-red-500 justify-center rounded-full size-11 text-sm">
                    <Icon name="solar:stop-bold" class="size-4 text-surface" />
                </button>
            </div>
        </div>
    </div>
</template>
