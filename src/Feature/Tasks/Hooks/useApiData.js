const { useState, useEffect } = require('react')

export const UseApiData = () => {
	const [data, setData] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	let { token } = JSON.parse(localStorage.getItem('token'))

	useEffect(() => {
		var url = 'https://tasks-crud.academlo.com/api/tasks'
		var bearer = 'Bearer ' + token
		fetch(url, {
			method: 'GET',
			headers: {
				Authorization: bearer,
				'Content-Type': 'application/json'
			}
		})
			.then(async (responseJson) => {
				let res = await responseJson.json()
				setData(res)
				setIsLoading(false)
				console.log(res)
			})
			.catch((error) => console.log(error))
	}, [token])

	return [data, isLoading]
}
