import { Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Auth } from './pages/auth'
import { Shop } from './pages/shop'
import { Home } from './pages/home'
import { Checkout } from './pages/checkout'
import Detail from './pages/detail'
import { AnimatePresence } from 'framer-motion'
import { PageTransition } from './components/UI/Animation/PageTransition'

export function App() {
  return (
    <>
      <NavBar />
			<AnimatePresence mode="wait">
			<Routes>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/auth" element={<PageTransition><Auth /></PageTransition>} />
        <Route path="/shop/*" element={<PageTransition><Shop /></PageTransition>} />
        <Route path="/checkout" element={<PageTransition><Checkout /></PageTransition>} />
        <Route path="/detail/:id" element={<PageTransition><Detail /></PageTransition>} />
      </Routes>
			</AnimatePresence>

    </>
  )
}
