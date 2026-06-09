export function SectionHeader({eyebrow, title, kicker}: {eyebrow: string; title: string; kicker?: string}) {
  return (
    <header className="section-head">
      <div>
        <div className="section-num">{eyebrow}</div>
      </div>
      <div>
        <h2 className="section-title">{title}</h2>
        {kicker ? <div className="section-kicker">{kicker}</div> : null}
      </div>
    </header>
  )
}
