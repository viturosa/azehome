import { useContext } from 'react'
 import { CategoriesContext } from '../../context/categoriesContext'
 import { CategoryPreview } from '../CategoryPreview'

 export function CategoriesPreview() {
 	const { categoriesMap } = useContext(CategoriesContext)

	 return (
	 <>
		{Object.keys(categoriesMap).map((title) => {
			const products = categoriesMap[title]
			return <CategoryPreview key={title} title={title} products={products} />
		})}
	</>
)
}
