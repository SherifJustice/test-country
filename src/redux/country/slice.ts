import { createSlice } from '@reduxjs/toolkit'

import { CountryState, CountryType, Status } from './types'
import { fetchCountries, fetchCountry } from './asyncActions'

// Initial state

const initialState: CountryState = {
	countries: [],
	countryPage: {} as CountryType,
	status: Status.LOADING,
	statusCountryPage: Status.LOADING,
}

// Reducers

export const countrySlice = createSlice({
	name: 'country',
	initialState,
	reducers: {
		setCountries: (state, action) => {
			state.countries = action.payload
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCountries.pending, (state) => {
				state.status = Status.LOADING
				state.countries = []
			})
			.addCase(fetchCountries.fulfilled, (state, action) => {
				state.status = Status.SUCCESS
				state.countries = action.payload
			})
			.addCase(fetchCountries.rejected, (state) => {
				state.status = Status.ERROR
				state.countries = []
			})
			.addCase(fetchCountry.pending, (state) => {
				state.statusCountryPage = Status.LOADING
				state.countryPage = {} as CountryType
			})
			.addCase(fetchCountry.fulfilled, (state, action) => {
				state.statusCountryPage = Status.SUCCESS
				state.countryPage = action.payload
			})
			.addCase(fetchCountry.rejected, (state) => {
				state.statusCountryPage = Status.ERROR
				state.countryPage = {} as CountryType
			})
	},
})

// Actions

export const { setCountries } = countrySlice.actions

export default countrySlice.reducer
