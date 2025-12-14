import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function useScrollAnimation() {
  const isReady = ref(false)

  onMounted(() => {
    gsap.registerPlugin(ScrollTrigger)
    isReady.value = true
  })

  onUnmounted(() => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  })

  const fadeInUp = (
    element: string | Element,
    options?: {
      delay?: number
      duration?: number
      y?: number
      start?: string
    }
  ) => {
    if (!isReady.value) return null

    return gsap.fromTo(
      element,
      {
        opacity: 0,
        y: options?.y ?? 50
      },
      {
        opacity: 1,
        y: 0,
        duration: options?.duration ?? 1,
        delay: options?.delay ?? 0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: options?.start ?? 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }

  const scaleIn = (
    element: string | Element,
    options?: {
      delay?: number
      duration?: number
      scale?: number
      start?: string
    }
  ) => {
    if (!isReady.value) return null

    return gsap.fromTo(
      element,
      {
        opacity: 0,
        scale: options?.scale ?? 0.8
      },
      {
        opacity: 1,
        scale: 1,
        duration: options?.duration ?? 0.8,
        delay: options?.delay ?? 0,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: element,
          start: options?.start ?? 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }

  const staggerIn = (
    elements: string,
    options?: {
      stagger?: number
      duration?: number
      y?: number
      start?: string
      trigger?: string | Element
    }
  ) => {
    if (!isReady.value) return null

    return gsap.fromTo(
      elements,
      {
        opacity: 0,
        y: options?.y ?? 30
      },
      {
        opacity: 1,
        y: 0,
        duration: options?.duration ?? 0.6,
        stagger: options?.stagger ?? 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: options?.trigger ?? elements,
          start: options?.start ?? 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }

  const drawLine = (
    element: string | Element,
    options?: {
      duration?: number
      start?: string
    }
  ) => {
    if (!isReady.value) return null

    return gsap.fromTo(
      element,
      { strokeDashoffset: 1000 },
      {
        strokeDashoffset: 0,
        duration: options?.duration ?? 2,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: element,
          start: options?.start ?? 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }

  const createTimeline = (
    triggerElement: string | Element,
    options?: ScrollTrigger.Vars
  ) => {
    if (!isReady.value) return gsap.timeline()

    return gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: 'top center',
        end: 'bottom center',
        ...options
      }
    })
  }

  return {
    isReady,
    fadeInUp,
    scaleIn,
    staggerIn,
    drawLine,
    createTimeline,
    gsap,
    ScrollTrigger
  }
}
