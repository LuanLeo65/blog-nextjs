'use client'

import { PropsWithChildren } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '@/styles/global-styles'
import { theme } from '@/styles/theme'

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}
