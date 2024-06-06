import React from 'react'
import { useSelector } from 'react-redux'

import Sidebar from '../components/Sidebar'
import Content from '../components/Content'

import { selectCountry } from '../redux/country/selectors'
import { useAppDispatch } from '../redux/store'
import { fetchCountries } from '../redux/country/asyncActions'

const Home: React.FC = () => {
	const { countries, status } = useSelector(selectCountry)
	const dispatch = useAppDispatch()

	const getCountries = async () => {
		dispatch(fetchCountries())
	}

	React.useEffect(() => {
		getCountries()
	}, [])

	return (
		<>
			<Content status={status} countries={countries} />
			<Sidebar />
		</>
	)
}

export default Home
