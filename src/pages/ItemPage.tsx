import React from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../redux/store'
import { useParams } from 'react-router-dom'

import { fetchCountry } from '../redux/country/asyncActions'
import { Status } from '../redux/country/types'
import { selectCountry } from '../redux/country/selectors'

const ItemPage: React.FC = () => {
	const dispatch = useAppDispatch()
	const { countryPage, statusCountryPage } = useSelector(selectCountry)
	const { name = '' } = useParams()

	React.useEffect(() => {
		dispatch(fetchCountry(name))
	}, [name])

	console.log(countryPage)

	return (
		<div className="content">
			{statusCountryPage === Status.LOADING ? (
				<h2>Loading...</h2>
			) : (
				<div className="country">
					<div className="country__flag">
						<img
							src={countryPage.flags?.png || countryPage.flags.svg}
							alt={countryPage.flags?.alt}
							className="country__flag-img"
						/>
					</div>
					<div className="country__main">
						<h4>
							<b>{countryPage.name?.common}</b>
						</h4>
						<p>
							<b>Region:</b> {countryPage.region}
						</p>
						<p>
							<b>Capital:</b> {countryPage.capital}
						</p>

						<p>
							<b>Official Name:</b> {countryPage.name?.official}
						</p>
						<p>
							<b>Population:</b> {countryPage.population}
						</p>

						<p>
							<b>Sub Region:</b> {countryPage.subregion}
						</p>
					</div>
					<div className="country__details">
						<h4>
							<b>Details</b>
						</h4>
						<h4>
							<b>{countryPage.name?.common}</b>
						</h4>
						<p>
							<b>Region:</b> {countryPage.region}
						</p>
						<p>
							<b>Capital:</b> {countryPage.capital}
						</p>

						<p>
							<b>Official Name:</b> {countryPage.name?.official}
						</p>
						<p>
							<b>Population:</b> {countryPage.population}
						</p>

						<p>
							<b>Sub Region:</b> {countryPage.subregion}
						</p>
					</div>
					<div className="country__map">
						<img
							src={countryPage.coatOfArms?.png}
							alt={countryPage.coatOfArms?.svg}
							className="country__map-img"
						/>
					</div>
				</div>
			)}
		</div>
	)
}

export default ItemPage
