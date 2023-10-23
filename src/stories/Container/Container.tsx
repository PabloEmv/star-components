import { createElement, styles, useHover, classNames } from './containerImports'
import {
  CSSProperties,
  FormEvent,
  ReactNode,
  BackgroundColor,
  BorderColor,
  Color,
  CornerRadius,
  fontFamily,
  AlignItems,
  ContainerType,
  FlexDirection,
  FlexWrap,
  GridTemplateColumns,
  GridTemplateRows,
  JustifyContent,
  MarginTypes,
  PaddingTypes
} from './containerImports'
import '../global.css'

interface ContainerProps {
  variant: ContainerType
  className?: string
  customStyles?: {
    flex?: {
      direction?: FlexDirection
      wrap?: FlexWrap
    }
    grid?: {
      templateRows?: GridTemplateRows
      templateColumns?: GridTemplateColumns
    }
    alignItems?: AlignItems
    justifyContent?: JustifyContent
    gap?: '4' | '8' | '12' | '16' | '20' | '24' | '32' | '40' | '48' | '64'
    borderRadius?: CornerRadius
    fontFamily?: fontFamily
    color?: Color
    hovColor?: Color
    backgroundColor?: BackgroundColor
    hovBackgroundColor?: BackgroundColor
    borderColor?: BorderColor
    hovborderColor?: BorderColor
    borderWidth?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    width?: string
    height?: string
    margin?: MarginTypes
    padding?: PaddingTypes
    size?: 'sm' | 'md' | 'lg' | 'xl'
  }
  style?: CSSProperties
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void
  children?: ReactNode
}

export const Container = ({
  variant,
  className,
  customStyles,
  style,
  children,
  ...restProps
}: ContainerProps) => {
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHover()

  const {
    alignItems,
    justifyContent,
    flex,
    grid,
    gap,
    borderRadius,
    fontFamily,
    color,
    hovColor,
    backgroundColor,
    hovBackgroundColor,
    borderColor,
    hovborderColor,
    borderWidth = 'none',
    width,
    height,
    margin = { marginAll: 'none' },
    padding = { paddingAll: 'none' },
    size
  } = customStyles || {}

  const {
    radius,
    topLeftRadius,
    topRightRadius,
    bottomLeftRadius,
    bottomRightRadius
  } = borderRadius || {}

  const containerClasses = classNames(
    className,
    styles.container,
    size && styles[size],
    borderWidth && `bw_${borderWidth}`,
    styles[`align_items_${alignItems}`],
    styles[`justify_content_${justifyContent}`],
    flex && styles.flex,
    styles[`flex_direction_${flex?.direction}`],
    styles[`flex_${flex?.wrap}`],
    grid && styles.grid,
    styles[`grid_${grid?.templateRows}`],
    styles[`grid_${grid?.templateColumns}`],
    styles[`gap_${gap}`],
    fontFamily,
    height,
    width,
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
    styles[`pb_${padding?.paddingBottom}`],
    radius && `br_${radius}`,
    topLeftRadius && `br_${topLeftRadius}`,
    topRightRadius && `br_${topRightRadius}`,
    bottomLeftRadius && `br_${bottomLeftRadius}`,
    bottomRightRadius && `br_${bottomRightRadius}`,
    isHovered && hovColor ? hovColor : color,
    isHovered && hovBackgroundColor
      ? `bg_${hovBackgroundColor}`
      : `bg_${backgroundColor}`,
    isHovered && hovborderColor ? `b_${hovborderColor}` : `b_${borderColor}`
  )

  return createElement(
    variant,
    {
      className: containerClasses,
      style: { ...style },
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      ...restProps
    },
    children
  )
}
