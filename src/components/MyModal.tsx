import React from 'react'

type MyModalProps = {
	isOpen: boolean
	onClick: () => void
	children: React.ReactNode
}
const MyModal: React.FC<MyModalProps> = ({ isOpen, onClick, children }) => {
	return (
		<div className={'overlay animated' + (isOpen ? ' show' : '')}>
			<div className="modal">
				<svg onClick={onClick} height="200" viewBox="0 0 200 200" width="200">
					<title />
					<path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
				</svg>
				{children}
			</div>
		</div>
	)
}

export default MyModal
