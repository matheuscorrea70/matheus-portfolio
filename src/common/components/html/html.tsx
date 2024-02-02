type AllowedTag = 'div' | 'p' | 'span'

export type HtmlProps = {
  children: string
  className?: string
  as?: AllowedTag
}

const Html = ({ as = 'span', children, className }: HtmlProps) => {
  const htmlData = { __html: children }
  const Tag = as

  return <Tag className={className} dangerouslySetInnerHTML={htmlData} />
}

export default Html
