import { createContext, useEffect, useState } from 'react'
 import { getCategoriesCollection } from '../utils/firebase'

 export const CategoriesContext = createContext({
 	categoriesMap: {}
 })

 export const CategoriesProvider = ({ children }) => {
 	const [categoriesMap, setCategoriesMap] = useState({})

 	useEffect(() => {
 		const getCategories = async () => {
 			console.log('Estou aqui')
 			const categoryMap = await getCategoriesCollection()
 			setCategoriesMap(categoryMap)
 		}

 		getCategories()
 	}, [])

 	const value = { categoriesMap }

 	return (
 		<CategoriesContext.Provider value={value}>
 			{children}
 		</CategoriesContext.Provider>
 	)
 }
