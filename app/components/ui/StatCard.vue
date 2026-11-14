<template>
    <div :class="[mainClass, 'card min-w-0 rounded-shell shadow-card space-y-4 p-3 sm:p-4']">
        <div class="flex items-center justify-between gap-1.5">
            <h3 class="text-xs sm:text-sm font-semibold">{{ 
                title 
            }}</h3>

            <div :class="[mainClass, 'icon shrink-0 rounded-full bg-surface flex items-center aspect-square w-7 sm:w-9']">
                <Icon name="solar:arrow-right-up-outline" class="size-4 m-auto" />
            </div>
        </div>
        <h4 class="text-4xl sm:text-5xl font-medium leading-none font-number -mt-2">
            {{ value }}
        </h4>
        <div :class="['flex items-center  gap-1 -mt-1', mainClass === 'primary' ? 'text-primary-400' : 'text-primary-600']">
            <Icon name="solar:card-outline" class="size-4 shrink-0" />
            <p class="text-[10px] sm:text-[11px] font-medium">Inscreased from last month</p>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string;
    mainClass: string;
    value: number;
}>();
</script>

<style lang="css">
.card.primary {
    background-color: var(--color-primary-800);
    color: var(--color-inverse);
}

.card.normal {
    background-color: var(--color-surface);
    color: var(--color-body);
}

.icon.primary {
    color: var(--color-primary-800);
    border: 1px solid var(--color-surface);
}

.icon.normal {
    color: var(--color-primary-800);
    border: 1px solid var(--color-primary-800);
}
</style>
