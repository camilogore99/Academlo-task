import { useEffect, useState } from 'react'

export const useToken = () => {
	const [token, setToken] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState('')

	useEffect(() => {
		let myHeaders = new Headers()
		myHeaders.append('Accept', 'application/json')

		let urlencoded = new URLSearchParams()
		urlencoded.append('email', 'erik@academlo.com')
		urlencoded.append('password', 'secret')

		let requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: urlencoded,
			redirect: 'follow'
		}

		fetch('https://tasks-crud.academlo.com/api/auth/login', requestOptions)
			.then((response) => response.text())
			.then((result) => {
				setToken(result)
				setIsLoading(false)
			})
			.catch((error) => setError(error))
	}, [])
	return [token, isLoading, error]
}
