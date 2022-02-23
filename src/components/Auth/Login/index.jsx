import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { token } from 'utils/token'
import { useToken } from '../Hooks/useToken'

const initialInputs = {
	email: 'erik@academlo.com',
	password: 'secret'
}

export const Login = () => {
	const [inputs, setInputs] = useState(initialInputs)
	const [error, setError] = useState(false)

	const navigate = useNavigate()

	const handleChange = (name) => (event) => {
		setInputs((state) => ({ ...state, [name]: event.target.value }))
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		const tokenAcces = await token()
		tokenAcces ? navigate(`/task/${tokenAcces}`) : setError(true)
	}

	return (
		<div className='container'>
			<div className='card'>
				<button>iniciar session</button>
				<button>registrarme</button>
				<p>inicio de sesion</p>
				<div>
					<form action='POST' onSubmit={handleSubmit}>
						<label htmlFor=''>Correo electronico</label>
						<input
							onChange={handleChange('email')}
							value={inputs.email}
							type='text'
						/>
						<label htmlFor=''>Contrasena</label>
						<input
							onChange={handleChange('password')}
							value={inputs.password}
							type='password'
						/>
						<p>olvide mi contraseña</p>
						<button type='submit'>Aceptar</button>
					</form>
				</div>
				{error && <div>lo sentimos el usuario no existe </div>}
			</div>
		</div>
	)
}
