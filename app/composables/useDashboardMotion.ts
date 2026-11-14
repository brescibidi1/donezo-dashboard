import { onBeforeUnmount, onMounted, type Ref } from 'vue';

/** Reveal each section once, and start its details only when it enters the viewport. */
export function useDashboardMotion(root: Ref<HTMLElement | null>) {
  const animations = new Set<Animation>();
  let observer: IntersectionObserver | undefined;
  let preference: MediaQueryList | undefined;
  const easing = 'cubic-bezier(0.22, 1, 0.36, 1)';

  const stop = () => {
    observer?.disconnect();
    animations.forEach(animation => animation.cancel());
    animations.clear();
  };

  const animate = (element: Element, frames: Keyframe[], duration: number, delay: number) => {
    const animation = element.animate(frames, { duration, delay, easing, fill: 'both' });
    animations.add(animation);
    animation.onfinish = () => {
      // Release the inline animation effect so hover styles and sticky positioning work normally.
      animation.cancel();
      animations.delete(animation);
    };
    return animation;
  };

  const revealDetails = (element: HTMLElement, delay: number) => {
    element.dispatchEvent(new CustomEvent('motion-enter', { detail: delay + 80 }));

    element.querySelectorAll('[data-motion-row]').forEach((row, index) => {
      animate(row, [
        { opacity: 0, transform: 'translateY(8px)' },
        { opacity: 1, transform: 'translateY(0)' },
      ], 440, delay + 100 + index * 45);
    });

    element.querySelectorAll('.analytics-bar').forEach((bar, index) => {
      animate(bar, [
        { opacity: 0, transform: 'scaleY(0.08)' },
        { opacity: 1, transform: 'scaleY(1)' },
      ], 780, delay + 160 + index * 55);
    });

    element.querySelectorAll('.gauge-segment').forEach(segment => {
      const length = segment.getAttribute('stroke-dasharray')?.split(' ')[0] ?? '100';
      animate(segment, [
        { strokeDashoffset: length, opacity: 0 },
        { opacity: 1, offset: 0.12 },
        { strokeDashoffset: '0', opacity: 1 },
      ], 1000, delay + 180);
    });
  };

  onMounted(() => {
    if (!root.value) return;
    preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    preference.addEventListener('change', stop);
    if (preference.matches) return;

    const pending = new Map<HTMLElement, Animation>();
    const enter = (element: HTMLElement) => {
      const animation = pending.get(element);
      if (!animation) return;
      // Keep the initial reading order, but avoid a long wait for cards reached by scrolling.
      const delay = performance.now() - mountedAt < 1200
        ? Number(element.dataset.motionDelay ?? 0)
        : 0;
      animation.effect?.updateTiming({ delay });
      animation.play();
      revealDetails(element, delay);
      pending.delete(element);
      observer?.unobserve(element);
    };
    const mountedAt = performance.now();

    root.value.querySelectorAll<HTMLElement>('[data-reveal]').forEach(element => {
      // The closed mobile dialog and the hidden desktop sidebar stay untouched.
      if (!element.getClientRects().length) return;
      const from = element.dataset.reveal === 'sidebar' ? 'translateX(-12px)' : 'translateY(14px)';
      const animation = animate(element, [
        { opacity: 0, transform: from },
        { opacity: 1, transform: 'translate(0)' },
      ], 620, 0);
      animation.pause();
      animation.currentTime = 0;
      pending.set(element, animation);
    });

    if (!('IntersectionObserver' in window)) {
      pending.forEach((_, element) => enter(element));
      return;
    }
    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) enter(entry.target as HTMLElement);
      });
    }, { threshold: 0.08 });
    pending.forEach((_, element) => observer?.observe(element));
  });

  onBeforeUnmount(() => {
    stop();
    preference?.removeEventListener('change', stop);
  });
}
