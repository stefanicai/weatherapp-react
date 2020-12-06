import {AppThunk} from "../app/store";
import {http} from "./http";
import {API_HOST, API_KEY} from "./constants";
import {DailyForecast, Location, WeatherForecast, CurrentWeatherInfo} from "../types";
import {setWeather} from "../reducers/weather-slice";



interface FetchWeatherResponse extends WeatherForecast {}

export const fetchWeather = (location: Location, units: string): AppThunk => async dispatch => {
    const data = await http<FetchWeatherResponse>(`${API_HOST}/onecall?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units=${units}&exclude=minutely,hourly,alerts`)
    const picked = {
        current: extractWeather(data.current),
        daily: extractDailyForecast(data.daily.slice(0,7)), //keep only one week
    }
    dispatch(setWeather(picked))
}

//extract only props available in weather from an object containing other keys
const extractWeather = <T extends CurrentWeatherInfo>(weather: T) => {
    const {dt, pressure, humidity, wind_speed, weather: descriptions, temp } = weather
    return { dt, pressure, humidity, wind_speed, weather: descriptions, temp }
}

// extract only props found in daily forecast
const extractDailyForecast = <T extends DailyForecast>(daily: T[]) => {
    return daily.map((forecast) => {
        const {dt, pressure, humidity, wind_speed, weather: descriptions, temp: { min, max } } = forecast
        return { dt, pressure, humidity, wind_speed, weather: descriptions, temp: { min, max } }
    })
}