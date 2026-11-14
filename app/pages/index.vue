<template>
    <div class="bg-canvas rounded-panel w-full min-w-0 space-y-3 sm:space-y-2 mt-2 p-3 sm:p-4">
        <div data-reveal data-motion-delay="120" class="view-header flex flex-col items-start gap-4 w-full mb-3 xl:flex-row xl:items-center xl:justify-between">
            <div class="flex flex-col gap-2 items-start">
                <h1 class="text-2xl sm:text-3xl font-semibold">Dashboard</h1>
                <p class="text-subtle text-sm">
                    Plan, prioritize, and accomplish your tasks with ease.
                </p>
            </div>

            <div class="flex gap-2 sm:gap-3 items-center w-full sm:w-auto">
                <button class="button __primary gap-2 rounded-full flex-1 sm:flex-none min-h-11">
                    <Icon name="hugeicons:plus-sign" class="size-5 text-inverse" />
                    <span class="text-inverse text-xs sm:text-sm font-semibold whitespace-nowrap">Add Project</span>
                </button>
                <button class="button rounded-full flex-1 sm:flex-none min-h-11">
                    <span class="text-xs sm:text-sm text-primary-700 font-semibold whitespace-nowrap">Import Data</span>
                </button>
            </div>
        </div>

        <div class="stats-block grid grid-cols-2 sm:grid-cols-4 gap-2">
            <StatCard
              data-reveal data-motion-delay="180"
              :main-class="'primary'"
              :title="'Total Projects'"
              :value="24"
            />
            <StatCard
              :main-class="'normal'"
              :title="'Ended Projects'"
              data-reveal data-motion-delay="240"
              :value="10"
            />
            <StatCard
              :main-class="'normal'"
              :title="'Pending Tasks'"
              data-reveal data-motion-delay="300"
              :value="12"
            />
            <StatCard
              :main-class="'normal'"
              :title="'Team Members'"
              data-reveal data-motion-delay="360"
              :value="2"
            />
        </div>

        <div class="main-content grid grid-cols-1 xl:grid-cols-12 gap-3 sm:gap-2">
            <div class="min-w-0 xl:col-span-9 space-y-3 sm:space-y-2">
                <!-- Main content goes here -->
                <div class="grid grid-cols-1 md:grid-cols-9 gap-3 sm:gap-2 w-full">
                    <ChartCard data-reveal data-motion-delay="420" />

                    <div data-reveal data-motion-delay="480" class="motion-card min-w-0 md:col-span-3 card rounded-shell shadow-card bg-surface p-4">
                        <h3 class="text-sm font-bold">Reminders</h3>
                        <div class="flex flex-col mt-4 gap-1">
                            <p class="font-bold text-start text-[19px] text-primary-700">
                                Meeting with Arc Company
                            </p>
                            <span class="text-muted text-xs font-number">Time: 02.00 pm - 04.00 pm</span>
                        </div>
                        <button class="button __primary w-full rounded-full justify-center gap-1.5 mt-4">
                            <Icon name="solar:videocamera-record-bold" class="size-5" />
                            <span class="text-sm font-medium">Start Meeting</span>
                        </button>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-9 gap-3 sm:gap-2 w-full">
                    <CollabCard data-reveal data-motion-delay="540" />

                    <ProgressChart data-reveal data-motion-delay="600" />
                </div>
            </div>

            <div class="min-w-0 grid grid-cols-1 sm:grid-cols-2 xl:flex xl:flex-col xl:col-span-3 gap-3 sm:gap-2">
                <!-- Sidebar content goes here -->
                 <div data-reveal data-motion-delay="660" class="motion-card bg-surface rounded-panel text-body shadow-card p-4">
                    <div class="flex items-center justify-between">
                        <h3 class="text-sm font-bold">Project</h3>
                        <NuxtLink to="#" class="button flex items-center gap-1 rounded-full py-1.5 min-h-0 px-2">
                            <Icon name="hugeicons:plus-sign" class="size-3 text-primary-700" />
                            <span class="font-semibold text-primary-700 text-xs">New</span>
                        </NuxtLink>
                    </div>
                    <ul class="flex flex-col gap-1.5 mt-3">
                        <li data-motion-row class="flex gap-2 items-center w-full">
                            <div class="aspect-square w-9 h-9 rounded-full bg-primary-100"></div>
                            <div class="flex flex-col">
                                <p class="font-semibold text-xs">Develop API Endpoints</p>
                                <span class="text-muted text-[9px] font-number">Due date: Nov 25, 2025</span>
                            </div>
                        </li>
                        <li data-motion-row class="flex gap-2 items-center w-full">
                            <div class="aspect-square w-9 h-9 rounded-full bg-primary-100"></div>
                            <div class="flex flex-col">
                                <p class="font-semibold text-xs">Onboarding Flow</p>
                                <span class="text-muted text-[9px] font-number">Due date: Nov 26, 2025</span>
                            </div>
                        </li>
                        <li data-motion-row class="flex gap-2 items-center w-full">
                            <div class="aspect-square w-9 h-9 rounded-full bg-primary-100"></div>
                            <div class="flex flex-col">
                                <p class="font-semibold text-xs">Build Dashboard</p>
                                <span class="text-muted text-[9px] font-number">Due date: Nov 30, 2025</span>
                            </div>
                        </li>
                        <li data-motion-row class="flex gap-2 items-center w-full">
                            <div class="aspect-square w-9 h-9 rounded-full bg-primary-100"></div>
                            <div class="flex flex-col">
                                <p class="font-semibold text-xs">Optimize Page Load</p>
                                <span class="text-muted text-[9px] font-number">Due date: Dec 6, 2025</span>
                            </div>
                        </li>
                        <li data-motion-row class="flex gap-2 items-center w-full">
                            <div class="aspect-square w-9 h-9 rounded-full bg-primary-100"></div>
                            <div class="flex flex-col">
                                <p class="font-semibold text-xs">Cross-Browser Testing</p>
                                <span class="text-muted text-[9px] font-number">Due date: Dec 6, 2025</span>
                            </div>
                        </li>
                    </ul>
                 </div>
                 
                <TimeTracker data-reveal data-motion-delay="720" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import ChartCard from '~/components/ui/ChartCard.vue';
import CollabCard from '~/components/ui/CollabCard.vue';
import ProgressChart from '~/components/ui/ProgressChart.vue';
import StatCard from '~/components/ui/StatCard.vue';
import TimeTracker from '~/components/ui/TimeTracker.vue';
</script>

<style lang="css" scoped>
div.view-header button.button {
    padding: 0.5rem 1rem;
    border-color: var(--color-primary-800) !important;
}
</style>
