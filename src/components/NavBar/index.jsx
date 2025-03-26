import { CartIcon } from '../CartIcon'
import { Logo } from '../Logo'
import './style.css'
import { Outlet, Link } from 'react-router-dom'
import { useContext } from 'react'
 import { UserContext } from '../../context/userContext'
 import { singOutAuthUser } from '../../utils/firebase'

export function NavBar() {
	const { currentUser } = useContext(UserContext)
	return (
		<>
		<div className='nav-bar'>
			<Logo  />
			<Link to='/'> AZe Home</Link>
			{currentUser ? (
 						<Link onClick={singOutAuthUser}>LOGOUT</Link>
 					) : (
 						<Link to="auth">LOGIN</Link>
 					)}
			<CartIcon />
		</div>

		<Outlet />
		</>

	)
}
