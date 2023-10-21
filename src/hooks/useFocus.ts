import { useState } from 'react'

export function useFocus(initialIsFocused = false) {
  const [isFocused, setIsFocused] = useState(initialIsFocused)

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

  return {
    isFocused,
    handleFocus,
    handleBlur
  }
}
