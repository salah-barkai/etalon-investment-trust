import { useEffect, useState } from 'react'

function shouldShow() {
  if (typeof window === 'undefined') return false
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
  try {
    return !sessionStorage.getItem('etalon-intro-shown')
  } catch {
    return false
  }
}

export default function Preloader() {
  const [mounted, setMounted] = useState(shouldShow)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    if (!mounted) return undefined

    try {
      sessionStorage.setItem('etalon-intro-shown', '1')
    } catch {
      // ignore: storage may be unavailable (private mode, restricted settings)
    }
    document.body.classList.add('intro-lock')

    const leaveTimer = setTimeout(() => setLeaving(true), 1500)
    const unmountTimer = setTimeout(() => {
      setMounted(false)
      document.body.classList.remove('intro-lock')
    }, 2200)

    return () => {
      clearTimeout(leaveTimer)
      clearTimeout(unmountTimer)
      document.body.classList.remove('intro-lock')
    }
  }, [mounted])

  if (!mounted) return null

  return (
    <div className={`preloader${leaving ? ' leave' : ''}`} aria-hidden="true">
      <img className="preloader-logo" src="/etalon-emblem.png" alt="" />
      <span className="preloader-name">Étalon Investment Trust</span>
      <span className="preloader-line" />
    </div>
  )
}
