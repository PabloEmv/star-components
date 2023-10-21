import { MouseEvent } from 'react'
import { TextProps } from '../Text/Text'
import {
  BackgroundColor,
  BorderColor,
  Color,
  CornerRadius
} from '../../types/types'
import { useHover } from '../../hooks/useHover'
import styles from './button.module.css'
import classNames from 'classnames'
import '../global.css'

interface ButtonProps
  extends Omit<TextProps, 'variant' | 'fontSize' | 'cursor'> {
  type?: 'submit' | 'reset' | 'button'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  bgColor?: BackgroundColor
  borderColor?: BorderColor
  borderRadius?: CornerRadius
  hovColor?: Color
  hovBgColor?: BackgroundColor
  hovborderColor?: BorderColor
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

export const Button = ({
  className,
  type = 'button',
  bgColor = 'blue_600',
  borderColor = 'blue_200',
  borderRadius = { radius: 'md' },
  color = 'white',
  fontFamily,
  fontWeight,
  italic,
  size = 'xs',
  textDecoration,
  hovColor,
  hovBgColor,
  hovborderColor,
  style,
  onClick,
  children,
  ...restProps
}: ButtonProps) => {
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHover()
  const {
    radius,
    topLeftRadius,
    topRightRadius,
    bottomLeftRadius,
    bottomRightRadius
  } = borderRadius

  const buttonClasses = classNames(
    className,
    styles.button,
    fontFamily,
    fontWeight && `font_${fontWeight}`,
    italic && 'italic',
    size && `btn_${size}`,
    textDecoration && `txt_${textDecoration}`,
    radius && `br_${radius}`,
    topLeftRadius && `br_${topLeftRadius}`,
    topRightRadius && `br_${topRightRadius}`,
    bottomLeftRadius && `br_${bottomLeftRadius}`,
    bottomRightRadius && `br_${bottomRightRadius}`,
    isHovered && hovColor ? hovColor : color,
    isHovered && hovBgColor ? `bg_${hovBgColor}` : `bg_${bgColor}`,
    isHovered && hovborderColor ? `b_${hovborderColor}` : `b_${borderColor}`
  )
  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      type={type}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...restProps}
    >
      {children}
    </button>
  )
}
