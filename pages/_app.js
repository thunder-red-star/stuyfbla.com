import '../styles/globals.css'

import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from 'next-themes';

const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {
      "background": "#dee4ef",
      "foreground": "#000000",
      "emphasis": "#1D52BC",
      "backgroundEmphasis": "#FFA800",
      "emphasisBright": "#487de8",
      "backgroundEmphasisBright": "#FFD700"
    },
  }
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      "background": "#09101e",
      "foreground": "#ffffff",
      "emphasis": "#FFA800",
      "backgroundEmphasis": "#1D52BC",
      "emphasisBright": "#FFD700",
      "backgroundEmphasisBright": "#487de8"
    }
  }
})

function MyApp({ Component, pageProps }) {
  return <NextThemesProvider
    defaultTheme="system"
    attribute="class"
    value={{
      light: lightTheme.className,
      dark: darkTheme.className
    }}
  >
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  </NextThemesProvider>
}

export default MyApp;