import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types'
import { InlineLink } from '../global/styles'

export const renderOptions = {
  renderMark: {
    [MARKS.BOLD]: (text) => <strong>{text}</strong>,
    [MARKS.ITALIC]: (text) => <em>{text}</em>,
    [MARKS.UNDERLINE]: (text) => <u>{text}</u>,
    [MARKS.CODE]: (text) => <code>{text}</code>
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
    [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
    [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
    [BLOCKS.HEADING_4]: (node, children) => <h4>{children}</h4>,
    [BLOCKS.HEADING_5]: (node, children) => <h5>{children}</h5>,
    [BLOCKS.HEADING_6]: (node, children) => <h6>{children}</h6>,
    [BLOCKS.QUOTE]: (node, children) => <blockquote>{children}</blockquote>,
    [BLOCKS.UL_LIST]: (node, children) => <ul>{children}</ul>,
    [BLOCKS.OL_LIST]: (node, children) => <ol>{children}</ol>,
    [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
    [BLOCKS.HR]: () => <hr />,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { file, title } = node.data.target.fields
      return <img src={file.url} alt={title} />
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      const { title, description } = node.data.target.fields
      return (
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      )
    },
    [INLINES.HYPERLINK]: (node, children) => {
      console.log({ nodeData: node.data })
      const { uri } = node.data
      return (
        <InlineLink href={uri} target="_blank" rel="noopener noreferrer">
          {children}
        </InlineLink>
      )
    }
  }
}
