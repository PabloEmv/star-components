export type ContainerType =
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
  | 'body'

export type FlexDirection = 'row' | 'row_reverse' | 'column' | 'column_reverse'

export type FlexWrap = 'nowrap' | 'wrap' | 'wrap_reverse'

export type AlignItems =
  | 'flex_start'
  | 'flex_end'
  | 'center'
  | 'baseline'
  | 'stretch'
  | 'start'
  | 'end'
  | 'self_start'
  | 'self_end'
  | 'safe'
  | 'unsafe'
  | 'normal'
  | 'first_baseline'
  | 'last_baseline'
  | 'space_between'
  | 'space_around'
  | 'space_evenly'

export type JustifyContent =
  | 'flex_start'
  | 'flex_end'
  | 'center'
  | 'space_between'
  | 'space_around'
  | 'space_evenly'
  | 'start'
  | 'end'
  | 'left'
  | 'right'
  | 'normal'

export type GridTemplateRows =
  | 'grid_rows_none'
  | 'grid_rows_1'
  | 'grid_rows_2'
  | 'grid_rows_3'
  | 'grid_rows_4'
  | 'grid_rows_5'
  | 'grid_rows_6'
  | 'grid_rows_7'
  | 'grid_rows_8'
  | 'grid_rows_9'
  | 'grid_rows_10'
  | 'grid_rows_11'
  | 'grid_rows_12'

export type GridTemplateColumns =
  | 'grid_cols_none'
  | 'grid_cols_1'
  | 'grid_cols_2'
  | 'grid_cols_3'
  | 'grid_cols_4'
  | 'grid_cols_5'
  | 'grid_cols_6'
  | 'grid_cols_7'
  | 'grid_cols_8'
  | 'grid_cols_9'
  | 'grid_cols_10'
  | 'grid_cols_11'
  | 'grid_cols_12'

type ContainerSpacing = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type MarginTypes = {
  marginAll?: ContainerSpacing
  marginX?: ContainerSpacing
  marginY?: ContainerSpacing
  marginLeft?: ContainerSpacing
  marginRight?: ContainerSpacing
  marginTop?: ContainerSpacing
  marginBottom?: ContainerSpacing
}

export type PaddingTypes = {
  paddingAll?: ContainerSpacing
  paddingX?: ContainerSpacing
  paddingY?: ContainerSpacing
  paddingLeft?: ContainerSpacing
  paddingRight?: ContainerSpacing
  paddingTop?: ContainerSpacing
  paddingBottom?: ContainerSpacing
}
