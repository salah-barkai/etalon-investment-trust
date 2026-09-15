import useCountUp from '../hooks/useCountUp.js'

export default function StatCounter({ value, suffix = '', label }) {
  const [count, ref] = useCountUp(value)
  return (
    <div className="stat" ref={ref}>
      <span className="stat-value">
        {count}
        {suffix}
      </span>
      <span className="stat-label">{label}</span>
    </div>
  )
}
