import { ChangeEvent } from 'react'
import { TextProps } from '../Text/Text'
import {
  BackgroundColor,
  BorderColor,
  Color,
  CornerRadius
} from '../../types/types'
import { useFocus } from '../../hooks/useFocus'
import styles from './Input.module.css'
import classNames from 'classnames'
import '../global.css'

interface InputProps
  extends Omit<TextProps, 'variant' | 'fontSize' | 'cursor'> {
  borderRadius?: CornerRadius
  borderColor?: BorderColor
  bgColor?: BackgroundColor
  focusColor?: Color
  borderFocusColor?: BorderColor
  bgFocusColor?: BackgroundColor
  borderWidth?: 'xs' | 'md' | 'lg' | 'xl'
  id?: string
  name?: string
  placeholder?: string
  type: 'text' | 'email' | 'password' | 'file' | 'search'
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({
  className,
  borderColor = 'gray_300',
  bgColor = 'gray_050',
  borderWidth = 'md',
  color = 'gray_800',
  borderFocusColor = 'gray_700',
  bgFocusColor = 'white',
  focusColor,
  fontFamily,
  fontWeight,
  id,
  italic,
  name,
  placeholder,
  textDecoration,
  type,
  style,
  onChange,
  borderRadius = { radius: 'md' },
  ...restProps
}: InputProps) => {
  const {
    radius,
    topLeftRadius,
    topRightRadius,
    bottomLeftRadius,
    bottomRightRadius
  } = borderRadius

  const { isFocused, handleFocus, handleBlur } = useFocus()

  const inputClasses = classNames(
    className,
    styles.input,
    fontFamily,
    fontWeight && `font_${fontWeight}`,
    italic && 'italic',
    radius && `br_${radius}`,
    borderWidth && `bw_${borderWidth}`,
    topLeftRadius && `br_${topLeftRadius}`,
    topRightRadius && `br_${topRightRadius}`,
    bottomLeftRadius && `br_${bottomLeftRadius}`,
    bottomRightRadius && `br_${bottomRightRadius}`,
    isFocused && focusColor ? focusColor : color,
    isFocused && borderFocusColor
      ? `b_${borderFocusColor}`
      : `b_${borderColor}`,
    isFocused && bgFocusColor ? `bg_${bgFocusColor}` : `bg_${bgColor}`,
    textDecoration && `txt_${textDecoration}`
  )

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event)
    }
  }

  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      className={inputClasses}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={handleChange}
      style={style}
      {...restProps}
    />
  )
}
