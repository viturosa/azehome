import CartWidget from '../../assets/imgs/carticon.svg'

export function CartIcon() {


	return (
		<div>
			<img src={CartWidget} width={30}/>
			<span>{0}</span>
		</div>
	)
}
