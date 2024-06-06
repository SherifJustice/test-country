import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import country from './country/slice'

export const store = configureStore({
	reducer: {
		country,
	},
})

export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
