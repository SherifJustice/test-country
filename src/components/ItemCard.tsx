import React from 'react'

import { CountryType } from '../redux/country/types'

const ItemCard: React.FC<CountryType> = ({ name, flags, region, capital }) => {
	return (
		<div className="card">
			<img
				src={flags.svg}
				alt={flags.alt}
				style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
			/>
			<div className="container-card">
				<h4>
					<b>{name.common}</b>
				</h4>
				<p>
					<b>Region:</b> {region}
				</p>
				<p>
					<b>Capital:</b> {capital}
				</p>
			</div>
		</div>
	)
}

export default ItemCard
