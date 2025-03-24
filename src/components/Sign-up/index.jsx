import { useState } from 'react'
import { toast } from 'react-toastify'
import { FormInput } from '../UI/FormInput'
import './style.css'
import {
	createAuthUserWithEmailPassword,
	createUserDocumentFromAuth
} from '../../utils/firebase'
import { Button } from '../UI/Button'

const defaultFormFilds = {
	name: '',
	email: '',
	password: '',
	confirmePassword: ''
}
export function SignUp() {
	const [formFilds, setFormFilds] = useState(defaultFormFilds)
	const { name, email, password, confirmePassword } = formFilds
	const handleChange = (event) => {
		const { name, value } = event.target
		setFormFilds({ ...formFilds, [name]: value })
	}
	const handleSubmit = async (event) => {
		event.preventDefault()
		if (password !== confirmePassword) {
			toast.warn('Senha não são iguais!')
			return
		}
		try {
			const { user } = await createAuthUserWithEmailPassword(email, password)
			await createUserDocumentFromAuth(user, { name })
			toast.success('Usuário cadastrado com sucesso!')
			setFormFilds(defaultFormFilds)
		} catch (error) {

			if (error.code === 'auth/email-already-in-use') {
				toast.error('E-mail já cadastrado')
			}
		}
	}
	return (
		<>
		<div className='sign-up-container'>
			<h2>Não possui conta?</h2>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Nome"
					type="text"
					placeholder="Digite seu nome"
					value={name}
					name="name"
					onChange={handleChange}

				/>
				<FormInput
					label="Email"
					type="email"
					placeholder="Digite seu e-mail"
					value={email}
					name="email"
					onChange={handleChange}

				/>
				<FormInput
					label="Senha"
					type="password"
					placeholder="Digite uma senha"
					value={password}
					name="password"
					onChange={handleChange}

				/>
				<FormInput
					label="Confirme sua Senha"
					type="password"
					placeholder="Confirme sua senha"
					value={confirmePassword}
					name="confirmePassword"
					onChange={handleChange}
				/>

<Button typeButton="inverted" type="submit">Criar Conta </Button>
			</form>
			</div>
		</>
	)
}
