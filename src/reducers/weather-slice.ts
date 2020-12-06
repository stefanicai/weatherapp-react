import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {AppThunk, RootState} from '../app/store'
import {Location, WeatherForecast} from "../types"

interface WeatherState {
    weather?: WeatherForecast,
    error?: string
    units: string
}

const initialState: WeatherState = {
    units: 'metric'
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        setWeatherForecastAction: (state, action: PayloadAction<WeatherForecast>) => {
            state.weather = action.payload
            state.error = ''
        },
        setWeatherUnitsAction: (state, action: PayloadAction<string>) => {
            state.units = action.payload
        }
    },
})

export const {setWeatherForecastAction, setWeatherUnitsAction} = weatherSlice.actions

export const setWeather = (forecast: WeatherForecast): AppThunk => async dispatch => {
    await dispatch(setWeatherForecastAction(forecast))
}

export const setWeatherUnits = (units: string): AppThunk => async dispatch => {
    await dispatch(setWeatherUnitsAction(units))
}

export const getCurrent = (state: WeatherState) => {
    return state.weather?.current
}

export const getUnits = (state: WeatherState) => {
    return state.units
}

export const getDaily = (state: WeatherState) => {
    return state.weather?.daily
}

export default weatherSlice.reducer
