import { initialModal } from 'Feature/Tasks'
import React from 'react'
import './style.css'

export const Modal = ({ setModal, children }) => {
	return (
		<div className='container-modal'>
			<div className='card_modal'>
				<div
					className='close_icon'
					onClick={() => {
						setModal && setModal(initialModal)
						// setFlagModal(false)
					}}
				>
					x
				</div>
				<div>{children}</div>
			</div>
		</div>
	)
}
