<template>
    <header class="bg-canvas rounded-panel w-full sticky top-2 z-20 p-3 sm:p-4">
        <div class="flex flex-wrap items-center w-full justify-between gap-3">
            <button type="button" class="header__button lg:hidden!" aria-label="Open navigation" aria-haspopup="dialog" @click="$emit('open-menu')">
                <Icon name="solar:hamburger-menu-outline" class="size-5 text-primary-700" />
            </button>
            <div class="search-block order-last sm:order-none bg-surface rounded-panel w-full sm:w-auto sm:flex-1 sm:max-w-64 min-w-0 min-h-11 p-0.5 px-6 shadow-panel relative">
                <div class="aspect-square w-4 flex absolute left-2 ">
                    <Icon name="solar:magnifer-outline" class="size-4 text-body" />
                </div>
                <input type="search" aria-label="Search tasks" class="flex text-base sm:text-xs font-medium p-1 py-2" placeholder="Search task">
                <span aria-hidden="true" class="search-shortcut bg-canvas hidden sm:flex items-center gap-0.5 rounded-sm font-sans text-[7px] font-medium text-body absolute right-2 shadow-card p-0.5 px-1">
                    <kbd class="font-sans!">⌘</kbd>
                    <kbd class="font-sans! font-medium! text-[8px]">F</kbd>
                </span>
            </div>

            <div class="flex items-center gap-2 ml-auto shrink-0">
                <button class="header__button" aria-label="Messages">
                    <Icon name="solar:letter-outline" class="size-4 text-body" />
                </button>
                <button class="header__button" aria-label="Notifications">
                    <Icon name="solar:bell-outline" class="size-4 text-body" />
                </button>

                <div class="flex items-center">
                    <div class="h-10 aspect-square flex image-cover items-center bg-rose-300 rounded-panel">
                        <img src="/images/user.png" class="h-full w-full rounded-panel object-cover" alt="Kenelm Ligan" />
                    </div>
                </div>
                <div class="hidden md:flex flex-col justify-center items-start">
                    <span class="font-bold text-sm">Kenelm Ligan</span>
                    <span class="text-[0.625rem] text-muted">kenelm.ligan@example.com</span>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
defineEmits<{ 'open-menu': [] }>();
</script>

<style scoped>
header .search-block div,
header .search-block .search-shortcut {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}

header .header__button {
    background-color: var(--color-surface);
    border-radius: var(--radius-panel);
    padding: .625rem;
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1/1;
    min-height: 44px;
    min-width: 44px;
    transition: background-color 0.3s ease;
}
</style>
