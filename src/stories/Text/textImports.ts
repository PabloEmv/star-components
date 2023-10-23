// Importaciones
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
import styles from './text.module.css'
import { MarginTypes, PaddingTypes } from '../../types/container'

export { createElement, classNames, styles }

export type {
  CSSProperties,
  ReactNode,
  textVariants,
  Color,
  CursorStyles,
  FontSize,
  TextDecoration,
  fontFamily,
  fontWeight,
  MarginTypes,
  PaddingTypes
}
