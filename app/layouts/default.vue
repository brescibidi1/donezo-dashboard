<template>
  <div ref="dashboardRoot" class="min-h-screen flex gap-2 bg-background! p-2 sm:p-3">
    <Sidebar class="hidden lg:flex" data-reveal="sidebar" />
    <dialog ref="mobileMenu" class="mobile-menu" aria-label="Main navigation" @click="closeOnBackdrop">
      <Sidebar mobile @close="closeMenu" />
    </dialog>
    <main class="rounded-shell min-w-0 flex-1">
      <Topbar data-reveal data-motion-delay="60" @open-menu="mobileMenu?.showModal()" />
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>
import Sidebar from "~/components/layout/Sidebar.vue";
import Topbar from "~/components/layout/Topbar.vue";

const mobileMenu = ref<HTMLDialogElement | null>(null);
const dashboardRoot = ref<HTMLElement | null>(null);
useDashboardMotion(dashboardRoot);
const isDesktop = useMediaQuery('(min-width: 1024px)');
const closeMenu = () => mobileMenu.value?.close();
const closeOnBackdrop = (event: MouseEvent) => {
  if (event.target === mobileMenu.value) closeMenu();
};
watch(isDesktop, (desktop) => {
  if (desktop) closeMenu();
});
</script>

<style scoped>
.mobile-menu {
  width: min(290px, calc(100vw - 32px));
  max-width: none;
  height: 100dvh;
  max-height: none;
  margin: 0;
  padding: 8px;
  border: 0;
  background: var(--color-background);
  color: var(--color-body);
}
.mobile-menu::backdrop { background: rgb(4 27 18 / 35%); }
.mobile-menu[open] { animation: drawer-enter 240ms cubic-bezier(0.22, 1, 0.36, 1); }
.mobile-menu[open]::backdrop { animation: backdrop-enter 240ms ease-out; }
@keyframes drawer-enter {
  from { opacity: 0; transform: translateX(-24px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes backdrop-enter { from { opacity: 0; } to { opacity: 1; } }
@media (prefers-reduced-motion: reduce) {
  .mobile-menu[open], .mobile-menu[open]::backdrop { animation: none; }
}
.mobile-menu :deep(aside) { width: 100%; min-height: 100%; }
:global(html:has(.mobile-menu[open])) { overflow: hidden; }
</style>
