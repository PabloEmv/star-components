import { CSSProperties, FormEvent, ReactNode, createElement } from 'react'
import styles from './container.module.css'
import {
  BackgroundColor,
  BorderColor,
  Color,
  CornerRadius,
  fontFamily
} from '../../types/types'
import { useHover } from '../../hooks/useHover'
import classNames from 'classnames'
import {
  AlignItems,
  ContainerType,
  FlexDirection,
  FlexWrap,
  GridTemplateColumns,
  GridTemplateRows,
  JustifyContent,
  MarginTypes,
  PaddingTypes
} from '../../types/container'

export { createElement, styles, useHover, classNames }
export type {
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
}
