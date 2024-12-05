import { gsap } from 'gsap';

export function initializeAnimations() {
  // Hero section animations
  gsap.from('.hero-title', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out'
  });

  gsap.from('.hero-subtitle', {
    duration: 1,
    y: 30,
    opacity: 0,
    delay: 0.3,
    ease: 'power3.out'
  });
}

export function animateCountdown(element: HTMLElement) {
  gsap.from(element, {
    scale: 0.9,
    opacity: 0,
    duration: 0.5,
    ease: 'power2.out'
  });
}