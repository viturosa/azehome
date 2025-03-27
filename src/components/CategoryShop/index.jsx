import { useContext, useEffect, useState } from 'react'
 import { CategoriesContext } from '../../context/categoriesContext'
 import { useParams } from 'react-router-dom'
 import { ProductCard } from '../ProductCard'
 import './style.css'

 export function CategoryShop() {
 	const { category } = useParams()

 	const { categoriesMap } = useContext(CategoriesContext)
 	const [products, setProducts] = useState()

 	useEffect(() => {
 		setProducts(categoriesMap[category])
 	}, [category, categoriesMap])

 	return (
 		<>
 			<h2 className="title-category-shop">{category.toUpperCase()}</h2>
 			<div className="category-shop-container">
 				{products &&
 					products.map((product) => (
 						<ProductCard key={product.id} product={product} />
 					))}
 			</div>
 		</>
 	)
 }
