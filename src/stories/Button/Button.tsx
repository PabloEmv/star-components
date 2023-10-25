import { useHover, styles, classNames } from './buttonImports'
import {
  CSSProperties,
  MouseEvent,
  ReactNode,
  BackgroundColor,
  BorderColor,
  Color,
  CornerRadius,
  fontFamily,
  fontWeight
} from './buttonImports'
import '../global.css'

interface ButtonProps {
  type?: 'submit' | 'reset' | 'button'
  className?: string
  customStyles?: {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    color?: Color
    fontFamily?: fontFamily
    fontWeight?: fontWeight
    italic?: boolean
    backgroundColor?: BackgroundColor
    borderColor?: BorderColor
    borderRadius?: CornerRadius
    hovColor?: Color
    hovBackgroundColor?: BackgroundColor
    hovborderColor?: BorderColor
  }
  style?: CSSProperties
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  children?: ReactNode
}

export const Button = ({
  className,
  type = 'button',
  customStyles,
  style,
  onClick,
  children,
  ...restProps
}: ButtonProps) => {
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHover()

  const {
    size = 'md',
    color = 'white',
    fontFamily,
    fontWeight,
    italic,
    backgroundColor = 'blue_500',
    borderColor = 'blue_200',
    borderRadius = { radius: 'sm' },
    hovColor = 'blue_500',
    hovBackgroundColor = 'gray_100',
    hovborderColor = 'blue_500'
  } = customStyles || {}
  const {
    radius,
    topLeftRadius,
    topRightRadius,
    bottomLeftRadius,
    bottomRightRadius
  } = borderRadius || {}

  const buttonClasses = classNames(
    className,
    styles.button,
    fontFamily,
    fontWeight && `font_${fontWeight}`,
    italic && 'italic',
    size && `btn_${size}`,
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
