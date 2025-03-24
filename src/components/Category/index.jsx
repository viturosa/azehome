import './style.css'

export function Category({ category }) {
			return (
				<div className="category-card">
					<img src={category.imageUrl} alt={category.title} />
				</div>
			);
		}
