export const createTask = (name, description) => {
	console.log(name, description)
	try {
		let { token } = JSON.parse(localStorage.getItem('token'))
		var bearer = 'Bearer ' + token

		let urlencoded = new URLSearchParams()
		urlencoded.append('name', name)
		urlencoded.append('description', description)

		let requestOptions = {
			mode: 'no-cors',
			method: 'POST',
			headers: {
				Authorization: bearer,
				'Content-Type': 'application/json'
			},
			body: urlencoded,
			redirect: 'follow'
		}

		fetch('https://tasks-crud.academlo.com/api/tasks', requestOptions)
			.then((response) => response.json())
			.then((result) => console.log(result))
			.catch((error) => console.log('error', error))
	} catch (error) {
		console.error(error)
	}
}
