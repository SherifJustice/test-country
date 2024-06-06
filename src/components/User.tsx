import React from 'react'

export type UserType = {
	name?: string
	avatar?: string
}

const User: React.FC<UserType> = ({ name, avatar }) => {
	return (
		<div className="wrapper">
			<img className="avatar" src={avatar} alt="avatar" />
			<h3 className="name">{name}</h3>
		</div>
	)
}

export default User
