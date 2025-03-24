import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './style/global.js'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './style/theme/default.js'
import { ToastContainer } from 'react-toastify'
import { App } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle />
			<ToastContainer />
 							<App />
		</ThemeProvider>
  </StrictMode>,
)
