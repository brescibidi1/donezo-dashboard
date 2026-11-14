<script setup lang="ts">
const patternId = `progress-hatch-${useId()}`;
</script>

<template>
  <div class="min-w-0 md:col-span-4 card rounded-shell shadow-card bg-surface p-4">
    <h3 class="text-sm font-bold">Project Progress</h3>
    <div class="flex flex-col w-full mt-3">
      <svg class="progress-gauge" viewBox="0 0 272 156" role="img" aria-label="Project progress: 41% of projects ended. Completed, in progress and pending.">
        <defs>
          <pattern :id="patternId" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(40)">
            <line x1="0" y1="0" x2="0" y2="5" class="hatch-line" />
          </pattern>
        </defs>
        <path class="gauge-track" d="M 24 136 A 112 112 0 0 1 248 136" :stroke="`url(#${patternId})`" />
        <!-- Normalize the arc to 100 units for the visual sections. -->
        <path class="gauge-segment gauge-in-progress" d="M 24 136 A 112 112 0 0 1 248 136" pathLength="100" stroke-dasharray="75 100" />
        <path class="gauge-segment gauge-completed" d="M 24 136 A 112 112 0 0 1 248 136" pathLength="100" stroke-dasharray="60 100" />
        <text x="136" y="130" text-anchor="middle" class="gauge-value">41%</text>
        <text x="136" y="148" text-anchor="middle" class="gauge-caption">Project Ended</text>
      </svg>
      <div class="legend-line flex justify-between items-center gap-1 mt-2">
        <span class="text-[9px] font-medium text-primary-600 pl-3.5 relative">Completed</span>
        <span class="text-[9px] font-medium text-primary-600 pl-3.5 relative">In Progress</span>
        <span class="text-[9px] font-medium text-primary-600 pl-3.5 relative">Pending</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.progress-gauge {
  display: block;
  width: 100%;
  max-width: 320px;
  margin-inline: auto;
  overflow: visible;
}
.gauge-track, .gauge-segment {
  fill: none;
  stroke-width: 34;
  stroke-linecap: round;
}
.hatch-line { stroke: var(--color-muted); stroke-width: 1.5; }
.gauge-completed { stroke: var(--color-primary-600); }
.gauge-in-progress { stroke: var(--color-primary-800); }
.gauge-value {
  fill: var(--color-heading);
  font-family: var(--font-number);
  font-size: 42px;
  font-weight: 500;
}
.gauge-caption {
  fill: var(--color-primary-600);
  font-family: var(--font-sans);
  font-size: 10px;
}
.legend-line span::before {
  position: absolute;
  content: '';
  height: 10px;
  width: 10px;
  border-radius: 50%;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}
.legend-line span:first-child::before { background-color: var(--color-primary-600); }
.legend-line span:nth-child(2)::before { background-color: var(--color-primary-800); }
.legend-line span:last-child::before {
  background: repeating-linear-gradient(130deg, var(--color-muted) 0 1px, transparent 1px 3px);
}
</style>
