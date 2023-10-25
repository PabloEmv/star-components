import { CSSProperties, MouseEvent, ReactNode } from 'react'
import {
  BackgroundColor,
  BorderColor,
  Color,
  CornerRadius,
  fontFamily,
  fontWeight
} from '../../types/types'
import { useHover } from '../../hooks/useHover'
import styles from './button.module.css'
import classNames from 'classnames'

export { useHover, styles, classNames }
export type {
  CSSProperties,
  MouseEvent,
  ReactNode,
  BackgroundColor,
  BorderColor,
  Color,
  CornerRadius,
  fontFamily,
  fontWeight
}
