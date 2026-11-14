<template>
    <div class="chart-card min-w-0 flex flex-col md:col-span-5 bg-surface rounded-shell shadow-card p-4">
        <div class="flex flex-wrap gap-2 items-center justify-between">
            <h3 class="text-sm font-bold">Team Collaboration</h3>
            <NuxtLink to="#" class="button flex items-center gap-1 rounded-full py-1.5 min-h-0 px-2">
                <Icon name="hugeicons:plus-sign" class="size-3 text-primary-700" />
                <span class="font-semibold text-primary-700 text-xs">Add Member</span>
            </NuxtLink>
        </div>
        <div class="h-full w-full flex mt-3">
            <ul class="flex flex-col grow gap-1.5">
                <li class="flex items-baseline-last justify-between gap-2">
                    <div class="flex gap-2 items-center">
                        <div class="w-9 aspect-square image-cover rounded-full bg-primary-200">
                            <img src="/images/teamate_1.png" />
                        </div>
                        <div class="flex flex-col">
                            <p class="font-semibold text-xs">Amanda Duff</p>
                            <p class="text-muted text-[9px] line-clamp-1 ">Project Manager <span class="font-bold text-body">Github Project Repository</span></p>
                        </div>
                    </div>
                    <div class="badge __success">Completed</div>
                </li>
                <li class="flex items-baseline-last justify-between gap-2">
                    <div class="flex gap-2 items-center">
                        <div class="w-9 aspect-square image-cover rounded-full bg-primary-200">
                            <img src="/images/teamate_2.png" />
                        </div>
                        <div class="flex flex-col">
                            <p class="font-semibold text-xs">Edward Adams</p>
                            <p class="text-muted text-[9px] line-clamp-1 ">Project Manager <span class="font-bold text-body">Integrate User Authentication System</span></p>
                        </div>
                    </div>
                    <div class="badge __warning">In Progress</div>
                </li>
                <li class="flex items-baseline-last justify-between gap-2">
                    <div class="flex gap-2 items-center">
                        <div class="w-9 aspect-square image-cover rounded-full bg-primary-200">
                            <img src="/images/teamate_3.png" />
                        </div>
                        <div class="flex flex-col">
                            <p class="font-semibold text-xs">Richard Doe</p>
                            <p class="text-muted text-[9px] line-clamp-1 ">Project Manager <span class="font-bold text-body">Develop Search and Filter functionality</span></p>
                        </div>
                    </div>
                    <div class="badge __danger">Pending</div>
                </li>
                <li class="flex items-baseline-last justify-between gap-2">
                    <div class="flex gap-2 items-center">
                        <div class="w-9 aspect-square image-cover rounded-full bg-primary-200">
                            <img src="/images/teamate_4.png" />
                        </div>
                        <div class="flex flex-col">
                            <p class="font-semibold text-xs">Damian Oliver</p>
                            <p class="text-muted text-[9px] line-clamp-1 ">Project Manager <span class="font-bold text-body">Responsive Layout for Homepage</span></p>
                        </div>
                    </div>
                    <div class="badge __warning">In Progress</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="css" scoped>
.chart-card li > div:first-child { min-width: 0; }
.chart-card li > div:first-child > div:last-child { min-width: 0; }
.chart-card .image-cover { flex-shrink: 0; overflow: hidden; }
.chart-card .image-cover img { width: 100%; height: 100%; object-fit: cover; }
.chart-card .badge { flex-shrink: 0; white-space: nowrap; }
.chart-card ul { min-width: 0; }
</style>
