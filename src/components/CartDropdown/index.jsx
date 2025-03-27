import { useContext } from 'react'
import { CartItem } from '../CartItem'
import { CartContext } from '../../context/cartContext'
import { useNavigate } from 'react-router-dom'

export function CartDropdown() {
	const { cartItems } = useContext(CartContext)

	const navigate = useNavigate()

	const goToCheckout = () => {
		navigate('/checkout')
	}

	return (
		<div className="cart-dropdown-container">
			<div className="cart-items">
 				{cartItems.map((item) => (
 					<CartItem item={item} key={item.id} />
 				))}
 			</div>
 			<button onClick={goToCheckout}>GO TO CHECKOUT</button>
 		</div>
 	)
 }
