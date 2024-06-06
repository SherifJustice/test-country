import React from 'react'

const Navbar = () => {
	return (
		<nav className="nav">
			<ul className="nav__list">
				<li className="nav__item_1">
					<a className="nav__link" href="#">
						Items
					</a>
				</li>
				<li className="nav__item_2">
					<a className="nav__link" href="#">
						Features
					</a>
				</li>
				<li className="nav__item_3">
					<a className="nav__link" href="#">
						Pictures
					</a>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
