import React from 'react'
import ItemCard from './ItemCard'

import { CountryType, Status } from '../redux/country/types'
import { Link } from 'react-router-dom'

type ContentProps = {
	status: Status
	countries: CountryType[]
}

const Content: React.FC<ContentProps> = ({ status, countries }) => {
	return (
		<div className="content">
			{status === Status.LOADING ? (
				<p>Loading...</p>
			) : (
				countries.map((country) => (
					<Link
						to={`/name/${country.name.common.toLowerCase()}`}
						key={country.capital[0]}
					>
						<ItemCard key={country.capital[0]} {...country} />
					</Link>
				))
			)}
		</div>
	)
}

export default Content
