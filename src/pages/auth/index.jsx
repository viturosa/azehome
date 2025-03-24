import { SignUp } from '../../components/Sign-up'
import { SignIn } from '../../components/Sign-in'
import './style.css'

export function Auth() {
	return (
		<div className="auth-container">
<SignIn />
<SignUp />
		</div>
	)
}
