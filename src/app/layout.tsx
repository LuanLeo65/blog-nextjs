import StyledComponentsRegistry from './lib/registry'
import { Providers } from './providers'
import { theme } from '../styles/theme'
import { ThemeProvider } from 'styled-components'


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <StyledComponentsRegistry >
          <ThemeProvider theme = {theme}>
            <Providers>{children}</Providers>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
