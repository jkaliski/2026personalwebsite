type SectionHeaderDataSanity = {
  root?: string
  eyebrow?: string
  title?: string
  kicker?: string
}

export function SectionHeader({
  eyebrow,
  title,
  kicker,
  dataSanity,
}: {
  eyebrow: string
  title: string
  kicker?: string
  dataSanity?: SectionHeaderDataSanity
}) {
  return (
    <header className="section-head" data-sanity={dataSanity?.root}>
      <div>
        <div className="section-num" data-sanity={dataSanity?.eyebrow}>
          {eyebrow}
        </div>
      </div>
      <div>
        <h2 className="section-title" data-sanity={dataSanity?.title}>
          {title}
        </h2>
        {kicker ? (
          <div className="section-kicker" data-sanity={dataSanity?.kicker}>
            {kicker}
          </div>
        ) : null}
      </div>
    </header>
  )
}
