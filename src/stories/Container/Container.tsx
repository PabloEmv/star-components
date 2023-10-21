import { FormEvent, ReactNode, createElement, useState } from 'react'
import styles from './container.module.css'
import '../global.css'
import {
  BackgroundColor,
  BorderColor,
  Color,
  CornerRadius
} from '../../types/types'
import { useHover } from '../../hooks/useHover'

interface ContainerProps {
  elementType:
    | 'div'
    | 'span'
    | 'section'
    | 'article'
    | 'aside'
    | 'nav'
    | 'header'
    | 'form'
    | 'footer'
    | 'main'
    | 'figure'
    | 'figcaption'
  alignItems?:
    | 'AlignStart'
    | 'AlignEnd'
    | 'AlignCenter'
    | 'AlignBaseline'
    | 'AlignStretch'
  borderRadius?: CornerRadius
  color?: Color
  hovColor?: Color
  bgColor?: BackgroundColor
  hovBgColor?: BackgroundColor
  borderColor?: BorderColor
  hovborderColor?: BorderColor
  boxShadow?: boolean
  flex?: 'row' | 'column' | 'rowReverse' | 'columnReverse'
  flexWrap?: 'noWrap' | 'wrap' | 'wrapReverse'
  gap?: string
  height?: string
  justifyContent?:
    | 'justifyStart'
    | 'justifyEnd'
    | 'justifyCenter'
    | 'justifyBetween'
    | 'justifyAround'
    | 'justifyEvenly'
  margin?: string
  padding?: string
  width?: string
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void
  children?: ReactNode
}

export const Container = ({
  elementType,
  alignItems,
  bgColor = 'bg_blue_200',
  borderRadius = { radius: 'br_md' },
  borderColor,
  hovBgColor,
  hovborderColor,
  boxShadow = false,
  color = 'gray_800',
  hovColor,
  flex,
  flexWrap,
  gap,
  height,
  justifyContent,
  margin = '0',
  padding = '0',
  width,
  children,
  ...restProps
}: ContainerProps) => {
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHover()

  const {
    radius,
    topLeftRadius,
    topRightRadius,
    bottomLeftRadius,
    bottomRightRadius
  } = borderRadius

  const classNames = `${color} ${flex ? styles[flex] : ''} ${
    flexWrap ? styles[flexWrap] : ''
  } ${alignItems ? styles[alignItems] : ''} ${
    justifyContent ? styles[justifyContent] : ''
  } ${boxShadow ? styles.boxShadow : ''} ${
    hovborderColor ? hovborderColor : ''
  } ${
    borderColor ? borderColor : ''
  } ${radius} ${topLeftRadius} ${topRightRadius} ${bottomLeftRadius} ${bottomRightRadius} 
  ${isHovered && hovColor ? hovColor : color} 
  ${isHovered && hovborderColor ? hovborderColor : borderColor} 
  ${isHovered && hovBgColor ? hovBgColor : bgColor}`

  return createElement(
    elementType,
    {
      className: classNames,
      style: {
        gap,
        height,
        width,
        margin,
        padding
      },
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      ...restProps
    },
    children
  )
}
