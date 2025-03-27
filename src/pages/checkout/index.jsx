import { useContext } from 'react'
 import { CartContext } from '../../context/cartContext'
 import { CheckoutItem } from '../../components/CheckoutItem'
 import './style.css'

 export function Checkout() {
 	const { cartItems, cartTotal } = useContext(CartContext)

 	return (
 		<div className="checkout-container">
 			<div className="checkout-header">
 				<div>
 					<span>Produto</span>
 				</div>
 				<div>
 					<span>Descrição</span>
 				</div>
 				<div>
 					<span>Quantidade</span>
 				</div>
 				<div>
 					<span>Preço</span>
 				</div>
 				<div>
 					<span>Remover</span>
 				</div>
 			</div>
 			{cartItems.map((item) => (
 				<CheckoutItem item={item} key={item.id} />
 			))}
 			<span className="total">Total: R${cartTotal}</span>
 		</div>
 	)
 }
