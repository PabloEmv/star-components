import { useFocus, styles, classNames } from './inputImports'
import {
  CSSProperties,
  ChangeEvent,
  BackgroundColor,
  BorderColor,
  Color,
  CornerRadius,
  TextDecoration,
  fontFamily,
  fontWeight,
  MarginTypes,
  PaddingTypes
} from './inputImports'
import '../global.css'

interface InputProps {
  id?: string
  name?: string
  type: 'text' | 'email' | 'password' | 'file' | 'search'
  className?: string
  customStyles?: {
    color?: Color
    fontFamily?: fontFamily
    fontWeight?: fontWeight
    italic?: boolean
    margin?: MarginTypes
    padding?: PaddingTypes
    textDecoration?: TextDecoration
    borderRadius?: CornerRadius
    borderColor?: BorderColor
    borderWidth?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    backgroundColor?: BackgroundColor
    focusColor?: Color
    borderFocusColor?: BorderColor
    backgroundFocusColor?: BackgroundColor
    placeholder?: string
  }
  style?: CSSProperties
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({
  className,
  customStyles,
  id,
  name,
  type,
  onChange,
  style,
  ...restProps
}: InputProps) => {
  const {
    backgroundColor,
    backgroundFocusColor,
    borderColor = 'gray_300',
    borderFocusColor = 'gray_400',
    borderRadius = { radius: 'md' },
    borderWidth = 'md',
    color = 'gray_800',
    focusColor,
    fontFamily,
    fontWeight,
    italic,
    margin,
    padding,
    placeholder,
    textDecoration
  } = customStyles || {}

  const {
    radius,
    topLeftRadius,
    topRightRadius,
    bottomLeftRadius,
    bottomRightRadius
  } = borderRadius || {}

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
    textDecoration && `txt_${textDecoration}`,
    isFocused && focusColor ? focusColor : color,
    isFocused && backgroundFocusColor
      ? `bg_${backgroundFocusColor}`
      : `bg_${backgroundColor}`,
    isFocused && borderFocusColor ? `b_${borderFocusColor}` : `b_${borderColor}`
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
