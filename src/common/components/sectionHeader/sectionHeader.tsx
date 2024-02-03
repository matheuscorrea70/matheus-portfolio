type SectionHeaderProps = {
  title: string
  subTitle?: string
}

const SectionHeader = ({ title, subTitle }: SectionHeaderProps) => {
  return (
    <header>
      {subTitle && <h2 className="font-bold text-sm text-sky-500 uppercase">{subTitle}</h2>}
      <h1 className="text-xl font-bold">{title}</h1>
    </header>
  )
}

export default SectionHeader
