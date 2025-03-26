import { CategoriesPreview } from "../../components/CategoriesPreview";
import { Route, Routes } from "react-router-dom";
export function Shop() {
	return (
		<Routes>
		<Route index element={<CategoriesPreview />} />
	</Routes>
)
}
