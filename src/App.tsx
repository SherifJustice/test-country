import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import ItemPage from './pages/ItemPage'

import './scss/App.module.scss'

import Header from './components/Header'
import Footer from './components/Footer'

import { UserType } from './components/User'
import MyModal from './components/MyModal'
import MyButton from './components/MyButton'

function App() {
	const [isOpen, setIsOpen] = React.useState(false)
	const [user, setUser] = React.useState<UserType | undefined>(undefined)
	const handleOpen = () => setIsOpen(true)
	const handleClose = () => setIsOpen(false)
	const handleUser = () => {
		setUser({
			name: 'Charls',
			avatar: 'https://a.d-cd.net/DSBXyJLuSCBgt3BrUGdc0TQkNbo-1920.jpg',
		})
		setIsOpen(false)
	}

	return (
		<div className="container">
			<Header onClick={handleOpen} user={user} />
			{/* Routes will be here */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="name/:name" element={<ItemPage />} />
			</Routes>
			{/* Footer will be here */}
			<Footer />
			{/* Modal will be here */}
			<MyModal isOpen={isOpen} onClick={handleClose}>
				<MyButton className={'background-black-btn'}>Регистрация</MyButton>
				<MyButton className={'background-black-btn'} onClick={handleUser}>
					Войти
				</MyButton>
			</MyModal>
		</div>
	)
}

export default App
