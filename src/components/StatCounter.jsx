import useCountUp from '../hooks/useCountUp.js'

export default function StatCounter({ value, suffix = '', label, icon: Icon, style }) {
  const [count, ref] = useCountUp(value)
  return (
    <div className="stat" ref={ref} style={style}>
      {Icon && <Icon className="stat-icon" strokeWidth={1.4} aria-hidden="true" />}
      <span className="stat-value">
        {count}
        <span className="stat-suffix">{suffix}</span>
      </span>
      <span className="stat-label">{label}</span>
    </div>
  )
}
