type SectionHeaderProps = {
  title: string
  id: string
  subTitle?: string
}

const SectionHeader = ({ title, id, subTitle }: SectionHeaderProps) => {
  return (
    <header>
      {subTitle && <h2 className="font-bold text-sm text-sky-600 uppercase">{subTitle}</h2>}
      <h1 id={id} className="text-lg font-bold">
        {title}
      </h1>
    </header>
  )
}

export default SectionHeader
