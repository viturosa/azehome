import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './style/global.js'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './style/theme/default.js'
import { ToastContainer } from 'react-toastify'
import { App } from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context/userContext.jsx'
import { CategoriesProvider } from './context/categoriesContext.jsx'
import { CartProvider } from './context/cartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
		<BrowserRouter>
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle />
			<ToastContainer />
 							<UserProvider>
 								<CategoriesProvider>
									<CartProvider>
										<App />
									</CartProvider>
 								</CategoriesProvider>
 				</UserProvider>
		</ThemeProvider>
		</BrowserRouter>
  </StrictMode>,
)
