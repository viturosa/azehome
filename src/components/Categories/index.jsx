import { Category } from "../Category";
import './style.css'
import { Link } from "react-router-dom";

const categories = [
	{
		id: 1,
		title: 'Decoração',
		imageUrl: 'https://static.zarahome.net/assets/public/e7cb/6f35/f723434eb21c/fb8ca8320f65/01/01.jpg?ts=1727878627932'
	},
	{
		id: 2,
		title: 'Mobília',
		imageUrl: 'https://static.zarahome.net/8/photos4/2025/V/4/1/p/7369/072/851/7369072851_7_1_1.jpg?t=1706633898481&imwidth=955&imformat=generic'
	},
	{
		id: 3,
		title: 'Sentidos',
		imageUrl: 'https://static.zarahome.net/8/photos4/2025/V/4/1/p/3494/509/800/3494509800_2_7_1.jpg?t=1706785107943&imwidth=478&imformat=generic'
	},
	{
		id: 4,
		title: 'Têxtil',
		imageUrl: 'https://static.zarahome.net/assets/public/ee0c/bcbe/51b141c2be0c/9c6935c408ce/44150088250-a7/44150088250-a7.jpg?ts=1740492672239&f=auto&w=478'
	},

		]

			export function Categories() {
			return (
				<Link  to='Shop'>
						<div className="container-home">
					{categories.map((category) => {
						return <Category category={category} key={category.id} />;
					})}
				</div>

				</Link>


			)}
