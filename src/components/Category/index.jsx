import * as Style from './style'

export function Category({ category }) {
	const { title, imageUrl } = category

			return (
				<Style.CategoryContainer>
				<Style.ImageBackgroud style={{ backgroundImage: `url(${imageUrl})` }} />

			</Style.CategoryContainer>
			)
		}
