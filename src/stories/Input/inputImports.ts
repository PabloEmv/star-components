import { CSSProperties, ChangeEvent } from 'react'
import {
  BackgroundColor,
  BorderColor,
  Color,
  CornerRadius,
  TextDecoration,
  fontFamily,
  fontWeight
} from '../../types/types'
import { useFocus } from '../../hooks/useFocus'
import styles from './Input.module.css'
import classNames from 'classnames'
import { MarginTypes, PaddingTypes } from '../../types/container'

export { useFocus, styles, classNames }

export type {
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
}
