import {RootState} from "./store";
import {getLocation as getLocationSelector, getLocationError} from '../reducers/location-slice'
import {getCurrent, getUnits, getDaily} from "../reducers/weather-slice";

// Location selectors
export const getLocation = (state: RootState) => getLocationSelector(state.locationState)
export const getError = (state: RootState) => getLocationError(state.locationState)

// Weather selectors
export const getCurrentWeather = (state: RootState) => getCurrent(state.weatherState)
export const getWeatherUnits = (state:RootState) => getUnits(state.weatherState)
export const getDailyForecast = (state:RootState) => getDaily(state.weatherState)

// Potential combined selectors here ...