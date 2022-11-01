import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Cabecalho from '../src/components/Cabecalho/Header'
import { ThemeProvider } from '@mui/material'
import tema from '../src/themes/themes'

export default function App({ Component, pageProps }: AppProps) {
  return ( 
    <ThemeProvider theme={tema}>
      <Cabecalho></Cabecalho>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
