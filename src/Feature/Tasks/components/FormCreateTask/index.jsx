import { initialModal } from 'Feature/Tasks'
import React, { useState } from 'react'
import { createTask } from 'utils/createTask'

const initialNewTask = {
	name: '',
	description: ''
}

export const FormCreateTask = ({ setModal }) => {
	const [inputsNewTask, setInputsNewTask] = useState(initialNewTask)

	const handleChange = (name) => (event) => {
		setInputsNewTask((state) => ({ ...state, [name]: event.target.value }))
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		createTask(inputsNewTask.name, inputsNewTask.description)
	}

	return (
		<div>
			<form action='POST' onSubmit={handleSubmit}>
				<label>Nombre de la tarea</label>
				<input
					onChange={handleChange('name')}
					value={inputsNewTask.name}
					type='text'
					placeholder='Escribe el nombre de la tarea'
				/>
				<label>Descripcion</label>
				<textarea
					onChange={handleChange('description')}
					value={inputsNewTask.description}
					type='text'
					placeholder='Descipcion dela tarea'
				/>
				<div onClick={() => setModal(initialModal)}>Cancelar</div>
				<button type='submit'>Agregar Tarea</button>
			</form>
		</div>
	)
}
