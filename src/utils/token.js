export const token = async () => {
	try {
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

		const res = await fetch(
			'https://tasks-crud.academlo.com/api/auth/login',
			requestOptions
		)
		const token = await res.text()
		return token
	} catch (error) {
		console.error(error)
		return false
	}
}
