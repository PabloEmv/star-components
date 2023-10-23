import { createElement, classNames, styles } from './textImports'
import {
  CSSProperties,
  Color,
  CursorStyles,
  FontSize,
  MarginTypes,
  PaddingTypes,
  ReactNode,
  TextDecoration,
  textVariants,
  fontFamily,
  fontWeight
} from './textImports'
import '../global.css'

export interface TextProps {
  variant: textVariants
  className?: string
  customStyles?: {
    color?: Color
    cursor?: CursorStyles
    fontFamily?: fontFamily
    fontSize?: FontSize
    fontWeight?: fontWeight
    italic?: boolean
    margin?: MarginTypes
    padding?: PaddingTypes
    textDecoration?: TextDecoration
    textAlign?: 'left' | 'right' | 'center' | 'justify'
  }
  htmlFor?: string
  style?: CSSProperties
  children?: ReactNode
}

export const Text = ({
  variant,
  className,
  customStyles,
  htmlFor,
  style,
  children,
  ...restProps
}: TextProps) => {
  const {
    color,
    cursor,
    fontFamily,
    fontSize,
    fontWeight,
    italic,
    margin = { marginAll: 'none' },
    padding = { paddingAll: 'none' },
    textDecoration,
    textAlign
  } = customStyles || {}

  const textClasses = classNames(
    className,
    color,
    cursor && `cursor_${cursor}`,
    fontFamily,
    fontSize && `text_${fontSize}`,
    fontWeight && `font_${fontWeight}`,
    italic && 'italic',
    textDecoration && `txt_${textDecoration}`,
    styles[`text_align_${textAlign}`],
    styles[`m_${margin?.marginAll}`],
    styles[`mx_${margin?.marginX}`],
    styles[`my_${margin?.marginY}`],
    styles[`ml_${margin?.marginLeft}`],
    styles[`mr_${margin?.marginRight}`],
    styles[`mt_${margin?.marginTop}`],
    styles[`mb_${margin?.marginBottom}`],
    styles[`p_${padding?.paddingAll}`],
    styles[`px_${padding?.paddingX}`],
    styles[`py_${padding?.paddingY}`],
    styles[`pl_${padding?.paddingLeft}`],
    styles[`pr_${padding?.paddingRight}`],
    styles[`pt_${padding?.paddingTop}`],
    styles[`pb_${padding?.paddingBottom}`]
  )

  return createElement(
    variant,
    {
      className: textClasses,
      style: { ...style },
      htmlFor,
      ...restProps
    },
    children
  )
}
