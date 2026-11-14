<template>
    <div :class="[mainClass, 'motion-card card min-w-0 rounded-shell shadow-card space-y-4 p-3 sm:p-4']" @motion-enter="animateValue">
        <div class="flex items-center justify-between gap-1.5">
            <h3 class="text-xs sm:text-sm font-semibold">{{ 
                title 
            }}</h3>

            <div :class="[mainClass, 'icon shrink-0 rounded-full bg-surface flex items-center aspect-square w-7 sm:w-9']">
                <Icon name="solar:arrow-right-up-outline" class="size-4 m-auto" />
            </div>
        </div>
        <h4 :aria-label="String(value)" class="tabular-nums text-4xl sm:text-5xl font-medium leading-none font-number -mt-2">
            <span aria-hidden="true">{{ displayedValue }}</span>
        </h4>
        <div :class="['flex items-center  gap-1 -mt-1', mainClass === 'primary' ? 'text-primary-400' : 'text-primary-600']">
            <Icon name="solar:card-outline" class="size-4 shrink-0" />
            <p class="text-[10px] sm:text-[11px] font-medium">Inscreased from last month</p>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string;
    mainClass: string;
    value: number;
}>();

const displayedValue = ref(props.value);
const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
let frame = 0;
const resetValue = () => {
    cancelAnimationFrame(frame);
    displayedValue.value = props.value;
};
const animateValue = (event: Event) => {
    if (reducedMotion.value) return;
    cancelAnimationFrame(frame);
    const start = performance.now() + Number((event as CustomEvent<number>).detail ?? 0);
    displayedValue.value = 0;
    const tick = (now: number) => {
        const progress = Math.min(1, Math.max(0, (now - start) / 850));
        displayedValue.value = Math.round(props.value * (1 - (1 - progress) ** 3));
        if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
};
watch(() => props.value, resetValue);
watch(reducedMotion, reduced => { if (reduced) resetValue(); });
onBeforeUnmount(resetValue);
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
