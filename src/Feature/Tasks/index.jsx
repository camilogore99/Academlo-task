import './style.css'
import React, { useState } from 'react'
import { UseApiData } from './Hooks/useApiData'
import { CardTask } from './components/CardTask'
import { Modal } from 'Feature/GeneralComponents/Modal'
import { FormCreateTask } from './components/FormCreateTask'

export const initialModal = {
	createTask: false,
	updateTask: false,
	deleteTask: false
}

export const Tasks = () => {
	const [data, isLoading] = UseApiData()
	const [modal, setModal] = useState(initialModal)

	if (isLoading) {
		return <> esta cargando </>
	}

	return (
		<div>
			{modal.createTask && (
				<Modal setModal={setModal}>
					<FormCreateTask setModal={setModal} />
				</Modal>
			)}
			<div>
				<p>erik</p>
				<img src='' alt='aun nada' />
			</div>
			<div>
				<h2>Tareas</h2>
				<input type='text' placeholder='Buscar tarea' />
				<button
					onClick={() => setModal({ ...modal, createTask: true })}
				>
					Crear Nueva tarea
				</button>
			</div>
			<div className='content-cards'>
				{data.map((element, i) => (
					<CardTask key={i} data={element} />
					// <div key={i}>{element.name}</div>
				))}
			</div>
		</div>
	)
}
