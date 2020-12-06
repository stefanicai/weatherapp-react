export interface Location {
    name?: string
    lon: string
    lat: string
}

export interface WeatherDescription {
    id: number
    main: string
    description: string
    icon: string
}

export interface WeatherInfo {
    dt: number
    pressure: number
    humidity: number
    wind_speed: number
    weather: WeatherDescription[]
}

export interface CurrentWeatherInfo extends WeatherInfo {
    temp: number
}

export interface DailyForecast extends WeatherInfo {
    temp: {
        min: number
        max: number
    }
}

export interface WeatherForecast {
    current: CurrentWeatherInfo
    daily: DailyForecast[]
}