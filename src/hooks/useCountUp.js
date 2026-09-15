import { useEffect, useRef, useState } from 'react'

export default function useCountUp(target, duration = 1600) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setValue(target)
      return undefined
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            const start = performance.now()
            const tick = (now) => {
              const progress = Math.min(1, (now - start) / duration)
              const eased = 1 - (1 - progress) ** 3
              setValue(Math.round(eased * target))
              if (progress < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
            io.unobserve(el)
          }
        })
      },
      { threshold: 0.4 },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [target, duration])

  return [value, ref]
}
