import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import locationReducer from '../reducers/location-slice'
import weatherReducer from "../reducers/weather-slice"

export const createStore = () => configureStore({
  reducer: {
    locationState: locationReducer,
    weatherState: weatherReducer
  },
})

export const store = createStore()

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
