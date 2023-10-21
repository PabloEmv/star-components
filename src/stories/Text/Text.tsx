import { CSSProperties, ReactNode, createElement } from 'react'
import { textVariants } from '../../types/text'
import {
  Color,
  CursorStyles,
  FontSize,
  TextDecoration,
  fontFamily,
  fontWeight
} from '../../types/types'
import classNames from 'classnames'
import '../global.css'

export interface TextProps {
  variant: textVariants
  className?: string
  color?: Color
  cursor?: CursorStyles
  fontFamily?: fontFamily
  fontSize?: FontSize
  fontWeight?: fontWeight
  italic?: boolean
  style?: CSSProperties
  textDecoration?: TextDecoration
  children?: ReactNode
}

export const Text = ({
  variant,
  className,
  color = 'gray_800',
  cursor,
  fontFamily,
  fontSize,
  fontWeight,
  italic,
  style,
  textDecoration,
  children,
  ...restProps
}: TextProps) => {
  const textClasses = classNames(
    className,
    color,
    cursor && `cursor_${cursor}`,
    fontFamily,
    fontSize && `text_${fontSize}`,
    fontWeight && `font_${fontWeight}`,
    italic && 'italic',
    textDecoration && `txt_${textDecoration}`
  )

  return createElement(
    variant,
    {
      className: textClasses,
      style: { ...style },
      ...restProps
    },
    children
  )
}
