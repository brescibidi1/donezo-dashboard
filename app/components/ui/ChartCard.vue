<script setup lang="ts">
const days = [
  { name: 'Sunday', label: 'S', value: 80, variant: 'hashed' },
  { name: 'Monday', label: 'M', value: 85, variant: 'monday' },
  { name: 'Tuesday', label: 'T', value: 75, variant: 'tuesday' },
  { name: 'Wednesday', label: 'W', value: 100, variant: 'wed' },
  { name: 'Thursday', label: 'T', value: 100, variant: 'hashed' },
  { name: 'Friday', label: 'F', value: 72, variant: 'hashed' },
  { name: 'Saturday', label: 'S', value: 90, variant: 'hashed' },
];
</script>

<template>
  <div class="chart-card min-w-0 flex flex-col md:col-span-6 bg-surface rounded-shell shadow-card p-4">
    <h3 class="text-sm font-bold">Project Analytics</h3>
    <ul class="analytics-chart flex w-full justify-between gap-1.5 mt-3" aria-label="Weekly project analytics">
      <li v-for="day in days" :key="day.name" class="analytics-day group" tabindex="0" :aria-label="`${day.name}: ${day.value}%`">
        <div class="bar-track">
          <div class="analytics-bar" :class="day.variant" :style="{ height: `${day.value}%` }">
            <span class="bar-tooltip">{{ day.value }}%</span>
          </div>
        </div>
        <span class="font-medium text-muted text-xs" aria-hidden="true">{{ day.label }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.analytics-chart { flex: 1; min-height: 136px; }
.analytics-day {
  display: flex;
  flex: 1;
  min-width: 0;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  border-radius: 6px;
}
.analytics-day:focus-visible {
  outline: 2px solid var(--color-primary-600);
  outline-offset: 3px;
}
.bar-track {
  display: flex;
  align-items: flex-end;
  width: 100%;
  min-height: 110px;
  flex: 1;
}
.analytics-bar { position: relative; width: 100%; border-radius: 500px; }
.hashed {
  background: repeating-linear-gradient(130deg, var(--color-muted) 0 1px, transparent 1px 4px);
}
.monday { background-color: var(--color-primary-700); }
.tuesday { background-color: var(--color-primary-400); }
.wed { background-color: var(--color-primary-800); }
.bar-tooltip {
  position: absolute;
  bottom: calc(100% + 4px);
  left: 50%;
  transform: translateX(-50%);
  padding: 1px 3px;
  border: 1px solid var(--color-primary-200);
  border-radius: 3px;
  background: var(--color-primary-50);
  color: var(--color-primary-600);
  font-family: var(--font-number);
  font-size: 8px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 150ms ease;
}
.analytics-day:hover .bar-tooltip, .analytics-day:focus-visible .bar-tooltip { opacity: 1; }
@media (prefers-reduced-motion: reduce) {
  .bar-tooltip { transition: none; }
}
</style>
