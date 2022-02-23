import './style.css'
import React from 'react'

export const CardTask = ({ data }) => {
	return (
		<div className='card'>
			<h4>{data.name}</h4>
			<p>{data.description}</p>
			<select name='' id=''>
				<option value='1'>Terminada</option>
				<option value='2'>Iniciada</option>
				<option value='3'>En pausa</option>
			</select>
		</div>
	)
}
