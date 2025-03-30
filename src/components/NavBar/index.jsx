import { CartIcon } from '../CartIcon'
import { Logo } from '../Logo'
import './style.css'
import { Outlet, Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../context/userContext'
import { singOutAuthUser } from '../../utils/firebase'
import { CartContext } from '../../context/cartContext'
import { CartDropdown } from '../CartDropdown'

export function NavBar() {
	const { isCartOpen } = useContext(CartContext)
	const { currentUser } = useContext(UserContext)

	return (
		<>
		<div className='nav-bar'>
			<Logo  />
			<Link to='/'> AZe Home</Link>
			{currentUser ? (
 						<Link onClick={singOutAuthUser} className='nav-button'>LOGOUT</Link>
 					) : (
 						<Link to="auth" className='nav-button'>LOGIN</Link>
 					)}
			<CartIcon className='cart-icon'/>
		{isCartOpen && <CartDropdown />}

		</div>
		<Outlet />
		</>

	)
}
