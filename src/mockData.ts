import {CurrentWeatherInfo, DailyForecast} from "./types";

export const mockCurrentWeather: CurrentWeatherInfo = {
    dt: 1607255531,
    pressure: 1002,
    humidity: 86,
    wind_speed: 1.5,
    weather: [
        {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d'
        }
    ],
    temp: 4.49
}

export const mockDayForecast_1607338800: DailyForecast = {
    dt: 1607338800,
    pressure: 998,
    humidity: 76,
    wind_speed: 0.79,
    weather: [
        {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d'
        }
    ],
    temp: {
        min: 1.75,
        max: 4.62
    }
}

export const mockDayForecast_1607425200: DailyForecast = {
    dt: 1607425200,
    pressure: 1005,
    humidity: 77,
    wind_speed: 1.07,
    weather: [
        {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04d'
        }
    ],
    temp: {
        min: 1.21,
        max: 4.62
    }
}