import { useContext } from 'react'
 import './style.css'
 import { CartContext } from '../../context/cartContext'

 export function CheckoutItem({ item }) {
 	const { removeItemToCart, addItemToCart, clearItemToCart } =
 		useContext(CartContext)
 	const { name, imageUrl, price, quantity } = item

 	const removeItem = () => removeItemToCart(item)
 	const addItem = () => addItemToCart(item)
 	const clearItem = () => clearItemToCart(item)

 	return (
 		<div className="checkout-item-container">
 			<div className="checkout-image">
 				<img src={imageUrl} />
 			</div>
 			<span className="name">{name}</span>
 			<span className="quantity">
 				<div onClick={removeItem} className="arrow">
 					&#10094;
 				</div>
 				<span className="value">{quantity}</span>
 				<div onClick={addItem} className="arrow">
 					&#10095;
 				</div>
 			</span>
 			<span className="price">{price}</span>
 			<div onClick={clearItem} className="remove">
 				&#10005;
 			</div>
 		</div>
 	)
 }
