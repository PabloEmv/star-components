export type fontFamily = 'poppins' | 'notosans'

export type fontWeight =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'

export type FontSize =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'

export type TextDecoration = 'linethrough' | 'none' | 'overline' | 'underline'

export type CornerRadius = {
  radius?: BorderRadius
  topLeftRadius?: TopLeftRadius
  topRightRadius?: TopRightRadius
  bottomLeftRadius?: BottomLeftRadius
  bottomRightRadius?: BottomRightRadius
}

export type BorderRadius =
  | 'none'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | 'full'

export type TopLeftRadius =
  | 'xs_tl'
  | 'sm_tl'
  | 'md_tl'
  | 'lg_tl'
  | 'xl_tl'
  | '2xl_tl'
  | '3xl_tl'
  | '4xl_tl'
  | '5xl_tl'

export type TopRightRadius =
  | 'xs_tr'
  | 'sm_tr'
  | 'md_tr'
  | 'lg_tr'
  | 'xl_tr'
  | '2xl_tr'
  | '3xl_tr'
  | '4xl_tr'
  | '5xl_tr'

export type BottomLeftRadius =
  | 'xs_bl'
  | 'sm_bl'
  | 'md_bl'
  | 'lg_bl'
  | 'xl_bl'
  | '2xl_bl'
  | '3xl_bl'
  | '4xl_bl'
  | '5xl_bl'

export type BottomRightRadius =
  | 'xs_br'
  | 'sm_br'
  | 'md_br'
  | 'lg_br'
  | 'xl_br'
  | '2xl_br'
  | '3xl_br'
  | '4xl_br'
  | '5xl_br'

export type CursorStyles =
  | 'auto'
  | 'default'
  | 'pointer'
  | 'wait'
  | 'text'
  | 'move'
  | 'help'
  | 'not_allowed'
  | 'none'
  | 'context_menu'
  | 'progress'
  | 'cell'
  | 'crosshair'
  | 'vertical_text'
  | 'alias'
  | 'copy'
  | 'no_drop'
  | 'grab'
  | 'grabbing'
  | 'all_scroll'
  | 'col_resize'
  | 'row_resize'
  | 'n_resize'
  | 'e_resize'
  | 's_resize'
  | 'w_resize'
  | 'ne_resize'
  | 'nw_resize'
  | 'se_resize'
  | 'sw_resize'
  | 'ew_resize'
  | 'ns_resize'
  | 'nesw_resize'
  | 'nwse_resize'
  | 'zoom_in'
  | 'zoom_out'

// Ejemplo de uso:
const myElement: HTMLElement = document.getElementById('miElemento')!
myElement.classList.add('pointer')

export type Color =
  | 'white'
  | 'gray_025'
  | 'gray_050'
  | 'gray_100'
  | 'gray_200'
  | 'gray_300'
  | 'gray_400'
  | 'gray_500'
  | 'gray_600'
  | 'gray_700'
  | 'gray_800'
  | 'gray_900'
  | 'brand_025'
  | 'brand_050'
  | 'brand_100'
  | 'brand_200'
  | 'brand_300'
  | 'brand_400'
  | 'brand_500'
  | 'brand_600'
  | 'brand_700'
  | 'brand_800'
  | 'brand_900'
  | 'error_025'
  | 'error_050'
  | 'error_100'
  | 'error_200'
  | 'error_300'
  | 'error_400'
  | 'error_500'
  | 'error_600'
  | 'error_700'
  | 'error_800'
  | 'error_900'
  | 'warning_025'
  | 'warning_050'
  | 'warning_100'
  | 'warning_200'
  | 'warning_300'
  | 'warning_400'
  | 'warning_500'
  | 'warning_600'
  | 'warning_700'
  | 'warning_800'
  | 'warning_900'
  | 'success_025'
  | 'success_050'
  | 'success_100'
  | 'success_200'
  | 'success_300'
  | 'success_400'
  | 'success_500'
  | 'success_600'
  | 'success_700'
  | 'success_800'
  | 'success_900'
  | 'bluegray_025'
  | 'bluegray_050'
  | 'bluegray_100'
  | 'bluegray_200'
  | 'bluegray_300'
  | 'bluegray_400'
  | 'bluegray_500'
  | 'bluegray_600'
  | 'bluegray_700'
  | 'bluegray_800'
  | 'bluegray_900'
  | 'bluelight_025'
  | 'bluelight_050'
  | 'bluelight_100'
  | 'bluelight_200'
  | 'bluelight_300'
  | 'bluelight_400'
  | 'bluelight_500'
  | 'bluelight_600'
  | 'bluelight_700'
  | 'bluelight_800'
  | 'bluelight_900'
  | 'blue_025'
  | 'blue_050'
  | 'blue_100'
  | 'blue_200'
  | 'blue_300'
  | 'blue_400'
  | 'blue_500'
  | 'blue_600'
  | 'blue_700'
  | 'blue_800'
  | 'blue_900'
  | 'indigo_025'
  | 'indigo_050'
  | 'indigo_100'
  | 'indigo_200'
  | 'indigo_300'
  | 'indigo_400'
  | 'indigo_500'
  | 'indigo_600'
  | 'indigo_700'
  | 'indigo_800'
  | 'indigo_900'
  | 'purple_025'
  | 'purple_050'
  | 'purple_100'
  | 'purple_200'
  | 'purple_300'
  | 'purple_400'
  | 'purple_500'
  | 'purple_600'
  | 'purple_700'
  | 'purple_800'
  | 'purple_900'
  | 'pink_025'
  | 'pink_050'
  | 'pink_100'
  | 'pink_200'
  | 'pink_300'
  | 'pink_400'
  | 'pink_500'
  | 'pink_600'
  | 'pink_700'
  | 'pink_800'
  | 'pink_900'
  | 'rose_025'
  | 'rose_050'
  | 'rose_100'
  | 'rose_200'
  | 'rose_300'
  | 'rose_400'
  | 'rose_500'
  | 'rose_600'
  | 'rose_700'
  | 'rose_800'
  | 'rose_900'
  | 'orange_025'
  | 'orange_050'
  | 'orange_100'
  | 'orange_200'
  | 'orange_300'
  | 'orange_400'
  | 'orange_500'
  | 'orange_600'
  | 'orange_700'
  | 'orange_800'
  | 'orange_900'

export type BackgroundColor =
  | 'white'
  | 'transparent'
  | 'gray_025'
  | 'gray_050'
  | 'gray_100'
  | 'gray_200'
  | 'gray_300'
  | 'gray_400'
  | 'gray_500'
  | 'gray_600'
  | 'gray_700'
  | 'gray_800'
  | 'gray_900'
  | 'brand_025'
  | 'brand_050'
  | 'brand_100'
  | 'brand_200'
  | 'brand_300'
  | 'brand_400'
  | 'brand_500'
  | 'brand_600'
  | 'brand_700'
  | 'brand_800'
  | 'brand_900'
  | 'error_025'
  | 'error_050'
  | 'error_100'
  | 'error_200'
  | 'error_300'
  | 'error_400'
  | 'error_500'
  | 'error_600'
  | 'error_700'
  | 'error_800'
  | 'error_900'
  | 'warning_025'
  | 'warning_050'
  | 'warning_100'
  | 'warning_200'
  | 'warning_300'
  | 'warning_400'
  | 'warning_500'
  | 'warning_600'
  | 'warning_700'
  | 'warning_800'
  | 'warning_900'
  | 'success_025'
  | 'success_050'
  | 'success_100'
  | 'success_200'
  | 'success_300'
  | 'success_400'
  | 'success_500'
  | 'success_600'
  | 'success_700'
  | 'success_800'
  | 'success_900'
  | 'bluegray_025'
  | 'bluegray_050'
  | 'bluegray_100'
  | 'bluegray_200'
  | 'bluegray_300'
  | 'bluegray_400'
  | 'bluegray_500'
  | 'bluegray_600'
  | 'bluegray_700'
  | 'bluegray_800'
  | 'bluegray_900'
  | 'bluelight_025'
  | 'bluelight_050'
  | 'bluelight_100'
  | 'bluelight_200'
  | 'bluelight_300'
  | 'bluelight_400'
  | 'bluelight_500'
  | 'bluelight_600'
  | 'bluelight_700'
  | 'bluelight_800'
  | 'bluelight_900'
  | 'blue_025'
  | 'blue_050'
  | 'blue_100'
  | 'blue_200'
  | 'blue_300'
  | 'blue_400'
  | 'blue_500'
  | 'blue_600'
  | 'blue_700'
  | 'blue_800'
  | 'blue_900'
  | 'indigo_025'
  | 'indigo_050'
  | 'indigo_100'
  | 'indigo_200'
  | 'indigo_300'
  | 'indigo_400'
  | 'indigo_500'
  | 'indigo_600'
  | 'indigo_700'
  | 'indigo_800'
  | 'indigo_900'
  | 'purple_025'
  | 'purple_050'
  | 'purple_100'
  | 'purple_200'
  | 'purple_300'
  | 'purple_400'
  | 'purple_500'
  | 'purple_600'
  | 'purple_700'
  | 'purple_800'
  | 'purple_900'
  | 'pink_025'
  | 'pink_050'
  | 'pink_100'
  | 'pink_200'
  | 'pink_300'
  | 'pink_400'
  | 'pink_500'
  | 'pink_600'
  | 'pink_700'
  | 'pink_800'
  | 'pink_900'
  | 'rose_025'
  | 'rose_050'
  | 'rose_100'
  | 'rose_200'
  | 'rose_300'
  | 'rose_400'
  | 'rose_500'
  | 'rose_600'
  | 'rose_700'
  | 'rose_800'
  | 'rose_900'
  | 'orange_025'
  | 'orange_050'
  | 'orange_100'
  | 'orange_200'
  | 'orange_300'
  | 'orange_400'
  | 'orange_500'
  | 'orange_600'
  | 'orange_700'
  | 'orange_800'
  | 'orange_900'

export type BorderColor =
  | 'white'
  | 'transparent'
  | 'gray_025'
  | 'gray_050'
  | 'gray_100'
  | 'gray_200'
  | 'gray_300'
  | 'gray_400'
  | 'gray_500'
  | 'gray_600'
  | 'gray_700'
  | 'gray_800'
  | 'gray_900'
  | 'brand_025'
  | 'brand_050'
  | 'brand_100'
  | 'brand_200'
  | 'brand_300'
  | 'brand_400'
  | 'brand_500'
  | 'brand_600'
  | 'brand_700'
  | 'brand_800'
  | 'brand_900'
  | 'error_025'
  | 'error_050'
  | 'error_100'
  | 'error_200'
  | 'error_300'
  | 'error_400'
  | 'error_500'
  | 'error_600'
  | 'error_700'
  | 'error_800'
  | 'error_900'
  | 'warning_025'
  | 'warning_050'
  | 'warning_100'
  | 'warning_200'
  | 'warning_300'
  | 'warning_400'
  | 'warning_500'
  | 'warning_600'
  | 'warning_700'
  | 'warning_800'
  | 'warning_900'
  | 'success_025'
  | 'success_050'
  | 'success_100'
  | 'success_200'
  | 'success_300'
  | 'success_400'
  | 'success_500'
  | 'success_600'
  | 'success_700'
  | 'success_800'
  | 'success_900'
  | 'bluegray_025'
  | 'bluegray_050'
  | 'bluegray_100'
  | 'bluegray_200'
  | 'bluegray_300'
  | 'bluegray_400'
  | 'bluegray_500'
  | 'bluegray_600'
  | 'bluegray_700'
  | 'bluegray_800'
  | 'bluegray_900'
  | 'bluelight_025'
  | 'bluelight_050'
  | 'bluelight_100'
  | 'bluelight_200'
  | 'bluelight_300'
  | 'bluelight_400'
  | 'bluelight_500'
  | 'bluelight_600'
  | 'bluelight_700'
  | 'bluelight_800'
  | 'bluelight_900'
  | 'blue_025'
  | 'blue_050'
  | 'blue_100'
  | 'blue_200'
  | 'blue_300'
  | 'blue_400'
  | 'blue_500'
  | 'blue_600'
  | 'blue_700'
  | 'blue_800'
  | 'blue_900'
  | 'indigo_025'
  | 'indigo_050'
  | 'indigo_100'
  | 'indigo_200'
  | 'indigo_300'
  | 'indigo_400'
  | 'indigo_500'
  | 'indigo_600'
  | 'indigo_700'
  | 'indigo_800'
  | 'indigo_900'
  | 'purple_025'
  | 'purple_050'
  | 'purple_100'
  | 'purple_200'
  | 'purple_300'
  | 'purple_400'
  | 'purple_500'
  | 'purple_600'
  | 'purple_700'
  | 'purple_800'
  | 'purple_900'
  | 'pink_025'
  | 'pink_050'
  | 'pink_100'
  | 'pink_200'
  | 'pink_300'
  | 'pink_400'
  | 'pink_500'
  | 'pink_600'
  | 'pink_700'
  | 'pink_800'
  | 'pink_900'
  | 'rose_025'
  | 'rose_050'
  | 'rose_100'
  | 'rose_200'
  | 'rose_300'
  | 'rose_400'
  | 'rose_500'
  | 'rose_600'
  | 'rose_700'
  | 'rose_800'
  | 'rose_900'
  | 'orange_025'
  | 'orange_050'
  | 'orange_100'
  | 'orange_200'
  | 'orange_300'
  | 'orange_400'
  | 'orange_500'
  | 'orange_600'
  | 'orange_700'
  | 'orange_800'
  | 'orange_900'