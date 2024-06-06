import axios from 'axios'

import { createAsyncThunk } from '@reduxjs/toolkit'

import { CountryType } from './types'

export const fetchCountries = createAsyncThunk<CountryType[]>(
	'country/fetchcountries',
	async () => {
		const { data } = await axios.get<CountryType[]>(
			'https://restcountries.com/v3.1/region/europe?fields=name,flags,region,capital'
		)
		return data
	}
)

export const fetchCountry = createAsyncThunk<CountryType, string>(
	'country/fetchcountry',
	async (name) => {
		const { data } = await axios.get<CountryType[]>(
			`https://restcountries.com/v3.1/name/${name}`
		)
		return data[0]
	}
)
