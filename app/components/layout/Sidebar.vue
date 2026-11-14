<template>
    <aside class="flex flex-col justify-between gap-8 shrink-0 relative bg-canvas rounded-panel w-50 xl:w-55 p-4" aria-label="Main navigation">
        <div class="space-y-8">
            <div class="logo flex ml-3 items-center gap-1">
                <Icon name="solar:radar-2-broken" class="size-7 text-primary-600" />
                <p class="font-semibold font-gabarito text-lg">Donezo</p>
                <button v-if="mobile" type="button" class="ml-auto size-11 rounded-full bg-surface text-primary-700" aria-label="Close navigation" @click="$emit('close')">
                    <Icon name="solar:close-circle-outline" class="size-6" />
                </button>
            </div>

            <div class="space-y-12 w-full" @click="onNavigation">
                <div class="space-y-4">
                    <h3 class="text-muted text-[9px] font-semibold font-gabarito uppercase ml-3 tracking-wider">MENU</h3>
                    <ul class="flex flex-col gap-1">
                        <li>
                            <NuxtLink to="/" class="sidebar__link group">
                                <Icon :name="isActiveLink('/') ? 'solar:widget-5-bold' : 'solar:widget-5-outline'" :class="['size-5 group-hover:text-primary-500', isActiveLink('/') ? 'text-primary-500' : 'text-subtle']" />
                                <span :class="isActiveLink('/') ? 'font-bold text-body' : 'font-medium text-subtle'">Dashboard</span>
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="#" class="sidebar__link group">
                                <Icon :name="isActiveLink('#') ? 'solar:notes-bold' : 'solar:notes-outline'" :class="['size-5 group-hover:text-primary-500', isActiveLink('#') ? 'text-primary-500' : 'text-subtle']" />
                                <span :class="isActiveLink('#') ? 'font-bold text-body' : 'font-medium text-subtle'">Tasks</span>
                            </NuxtLink>
                        </li>
                        <!-- <li>
                            <NuxtLink to="#" class="sidebar__link group">
                                <Icon :name="isActiveLink('#') ? 'solar:calendar-mark-bold' : 'solar:calendar-mark-outline'" :class="['size-5 group-hover:text-primary-500', isActiveLink('#') ? 'text-primary-500' : 'text-subtle']" />
                                <span :class="isActiveLink('#') ? 'font-bold text-body' : 'font-medium text-subtle'">Calendar</span>
                            </NuxtLink>
                        </li> -->
                        <li>
                            <NuxtLink to="#" class="sidebar__link group">
                                <Icon :name="isActiveLink('#') ? 'solar:chart-2-bold' : 'solar:chart-2-outline'" :class="['size-5 group-hover:text-primary-500', isActiveLink('#') ? 'text-primary-500' : 'text-subtle']" />
                                <span :class="isActiveLink('#') ? 'font-bold text-body' : 'font-medium text-subtle'">Analytics</span>
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="#" class="sidebar__link group">
                                <Icon :name="isActiveLink('#') ? 'solar:users-group-rounded-bold' : 'solar:users-group-rounded-outline'" :class="['size-5 group-hover:text-primary-500', isActiveLink('#') ? 'text-primary-500' : 'text-subtle']" />
                                <span :class="isActiveLink('#') ? 'font-bold text-body' : 'font-medium text-subtle'">Team</span>
                            </NuxtLink>
                        </li>
                    </ul>
                </div>

                <div class="space-y-4">
                    <h3 class="text-muted text-[9px] font-semibold font uppercase ml-3 tracking-wider">GENERAL</h3>
                    <ul class="flex flex-col gap-1">
                        <li>
                            <NuxtLink to="#" class="sidebar__link group">
                                <Icon :name="isActiveLink('#') ? 'solar:settings-bold' : 'solar:settings-outline'" :class="['size-5 group-hover:text-primary-500', isActiveLink('#') ? 'text-primary-500' : 'text-subtle']" />
                                <span :class="isActiveLink('#') ? 'font-bold text-body' : 'font-medium text-subtle'">Settings</span>
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="#" class="sidebar__link group">
                                <Icon :name="isActiveLink('#') ? 'solar:lightbulb-bold' : 'solar:lightbulb-outline'" :class="['size-5 group-hover:text-primary-500', isActiveLink('#') ? 'text-primary-500' : 'text-subtle']" />
                                <span :class="isActiveLink('#') ? 'font-bold text-body' : 'font-medium text-subtle'">Help</span>
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="#" class="sidebar__link group">
                                <Icon :name="isActiveLink('#') ? 'solar:login-3-bold' : 'solar:login-3-outline'" :class="['size-5 group-hover:text-primary-500', isActiveLink('#') ? 'text-primary-500' : '']" />
                                <span :class="isActiveLink('#') ? 'font-bold text-body' : 'font-medium text-subtle'">Logout</span>
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="advertising-card relative bg-primary-950 rounded-panel shadow-card p-2.5 px-3">
            <div class="flex-1 flex flex-col justify-between gap-6">
                <div class="space-y-2">
                    <div class="flex aspect-square bg-surface rounded-panel w-6">
                        <Icon name="solar:ufo-3-outline" class="size-4 text-primary-800 m-auto" />
                    </div>
                    <h3 class="text-inverse font-light text-lg leading-6">
                        <span class="font-semibold">Download</span>
                        our <br> Mobile App
                    </h3>
                    <p class="text-subtle text-[9px] -mt-1.5 leading-4">
                        Get in another way
                    </p>
                </div>
                <button class="button __primary rounded-panel font-bold text-xs">Download</button>
            </div>
        </div>
    </aside>
</template>

<script setup lang="ts">
defineProps<{ mobile?: boolean }>();
const emit = defineEmits<{ close: [] }>();
const onNavigation = (event: MouseEvent) => {
    if ((event.target as HTMLElement).closest('a')) emit('close');
};
const isActiveLink = (link: string) => {
    return useRoute().path === link;
};
</script>

<style lang="css" scoped>
ul li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.25rem 0.75rem;
    position: relative;
    transition: background-color 0.3s ease, color 0.3s ease;
}

ul li::before {
    position: absolute;
    content: "";
    width: 0.325rem;
    height: 100%;
    left: -16px;
    top: 0;
    background-color: var(--color-primary-600);
    border-radius: 0 0.25rem 0.25rem 0;
    opacity: 0;
    transition: opacity 0.3s ease;
}

ul li:has(.router-link-active)::before {
    opacity: 1;
}

ul li a.sidebar__link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-subtle);
    text-decoration: none;
    min-height: 36px;
    width: 100%;
}

ul li a.sidebar__link span {
    font-size: 1rem;
}
</style>
