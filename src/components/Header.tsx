import React from 'react'
import MyInput from './MyInput'
import MyButton from './MyButton'
import User, { UserType } from './User'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

type HeaderProps = {
	onClick: () => void
	user?: UserType
}

const Header: React.FC<HeaderProps> = ({ onClick, user }) => {
	const [value, setValue] = React.useState('')
	const [isLoggedIn, setIsLoggedIn] = React.useState(false)

	React.useEffect(() => {
		setIsLoggedIn(!!user)
	}, [user])

	return (
		<header className="header">
			<div className="header__wrapper">
				<Link to="/">
					<img
						className="header__logo"
						src="https://i.internethaber.com/files/2017/7/20/1794572/1794572_3_1500554448O2DZk.jpg"
						alt="logo"
					/>
				</Link>

				<h2 className="header__title">Random</h2>
			</div>
			<Navbar />
			<div className="header__search-register">
				<div className="search">
					<MyInput
						classNameInput="search__input"
						type="text"
						placeholder="Поиск..."
						value={value}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
							setValue(event.target.value)
						}
					/>
				</div>
				<div className="register">
					{isLoggedIn ? (
						<>
							<User name={user?.name} avatar={user?.avatar} />
							<div className="wrapper-2">
								<MyButton onClick={() => setIsLoggedIn(false)}>Выйти</MyButton>
							</div>
						</>
					) : (
						<div className="wrapper-2">
							<MyButton onClick={() => onClick()}>Войти</MyButton>
						</div>
					)}
				</div>
			</div>
		</header>
	)
}

export default Header
