export default function ServiceCard({ title, description }) {
  return (
    <div className="card">
      <svg className="ico" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5">
        <rect x="4" y="6" width="32" height="24" rx="3" /><path d="M12 36h16M20 30v6M10 14h8v8h-8zM22 14h8M22 18h8M22 22h8" />
      </svg>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}