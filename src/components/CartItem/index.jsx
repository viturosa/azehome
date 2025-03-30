import './style.css'
 export function CartItem({ item }) {
 	const { name, quantity, imageUrl, price } = item

 	return (
 		<div className="cart-item-container">
 			<div>
 				<img src={imageUrl} />
 				<div className="item-details">
 					<span className="item-name">{name}</span>
 					<span className="item-price">
 						{quantity} x R$ {price}
 					</span>
 				</div>
 			</div>
 		</div>
 	)
 }
