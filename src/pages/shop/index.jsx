import { CategoriesPreview } from "../../components/CategoriesPreview"
import { Route, Routes } from "react-router-dom"
import { CategoryShop } from "../../components/CategoryShop"
import  Detail  from "../detail"

export function Shop() {
	return (
		<Routes>
		<Route index element={<CategoriesPreview />} />
		<Route path=":category" element={< CategoryShop />} />
	</Routes>
)
}
