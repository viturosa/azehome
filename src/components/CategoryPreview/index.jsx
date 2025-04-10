import { Link } from 'react-router-dom'
 import { ProductCard } from '../ProductCard'
 import './style.css'

 export function CategoryPreview({ title, products }) {
 	return (
 		<div className="category-preview-container">
 			<h2>
 				<Link to={title}>{title}</Link>
 			</h2>
 			<div className="preview">
 				{products
 					.filter((_, index) => index < 4)
 					.map((product) => (
 						<ProductCard key={product.id} product={product} />
 					))}
 			</div>
 		</div>
 	)
 }
