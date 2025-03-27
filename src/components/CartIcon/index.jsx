import CartWidget from '../../assets/imgs/carticon.svg'
import './style.css'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'

export function CartIcon() {

	const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

 	const toogleIsCartOpen = () => setIsCartOpen(!isCartOpen)

	return (
		<div className="cart-icon-container" onClick={toogleIsCartOpen}>
			<img className="shopping-icon" src={CartWidget} width={30} />
			<span className="item-count">{cartCount}</span>
		</div>
	)
}
