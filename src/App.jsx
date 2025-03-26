import { useEffect } from "react"
import { NavBar } from "./components/NavBar"
import { Auth } from './pages/auth'
import { Shop } from './pages/shop'
import { Home } from "./pages/home"
import { Route, Routes } from 'react-router-dom'
import { addCollectionAndDocuments } from "./utils/firebase"
import { SHOP_DATA } from './shop-data'

export function App() {

	useEffect(() => {
		addCollectionAndDocuments('categories', SHOP_DATA)
	}, [])

  return (
   <Routes>

		<Route path='/' element={<NavBar />}>
		<Route index element={<Home />} />
		<Route path='auth' element={<Auth />} />
		<Route path='shop' element={<Shop />} />
		</Route>

		</Routes>

  )
}

