import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const Tasks = () => {
	const params = useParams()
	console.log(params)
	useEffect(() => {
		let myHeaders = new Headers()
		myHeaders.append('Accept', 'application/json')

		let urlencoded = new URLSearchParams()

		let requestOptions = {
			method: 'GET',
			headers: myHeaders,
			redirect: 'follow'
		}

		fetch(
			`https://tasks-crud.academlo.com/api/user/w7wQtTqc5SrMAFgpZWRh3fn4MLpFrAtrOYSmljMo`,
			requestOptions
		)
			.then((response) => response.text())
			.then((result) => console.log(result))
			.catch((error) => console.log('error', error))
	}, [params])

	return (
		<div>
			<h2>Aqui van a ir las Tasks</h2>
		</div>
	)
}
