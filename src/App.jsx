import { NavBar } from "./components/NavBar"
import { Auth } from './pages/auth'
import { Shop } from './pages/shop'
import { Home } from "./pages/home"
import { Route, Routes } from 'react-router-dom'
import { Checkout } from "./pages/checkout"
import  Detail from "./pages/detail"

export function App() {


  return (
		<Router>
			<NavBar />

			<Routes>
		<Route index element={<Home />} />
		<Route path='auth' element={<Auth />} />
		<Route path='/' element={<Shop />} />
		<Route path='checkout' element={<Checkout />} />
		<Route path='/detail/:id' element={<Detail />} />
		</Routes>

		</Router>

  )
}

