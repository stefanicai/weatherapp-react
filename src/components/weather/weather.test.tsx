import React from "react"
import {render, screen} from "@testing-library/react"
import {Weather} from "."
import {Provider} from "react-redux"
import {createStore} from "../../app/store"
import {setWeather} from "../../reducers/weather-slice"
import {mockCurrentWeather, mockDayForecast_1607338800, mockDayForecast_1607425200} from "../../mockData"
import {setLocationError} from "../../reducers/location-slice"

const renderWeather = (store: ReturnType<typeof createStore>) => {
    render(
        <Provider store={store}>
            <Weather/>
        </Provider>
    )
}

describe("<Weather />", () => {
    it("renders the weather component when no weather data is available", () => {
        const store = createStore()
        renderWeather(store)
        expect(screen.getByTestId("weather-section")).toBeInTheDocument()
        expect(screen.queryByTestId("current-weather-section")).not.toBeInTheDocument()
        expect(screen.queryByTestId("weather-error")).not.toBeInTheDocument()
    })

    it("renders the weather component when weather data is available", () => {
        const store = createStore()
        renderWeather(store)
        store.dispatch(setWeather({current: mockCurrentWeather, daily: [mockDayForecast_1607338800, mockDayForecast_1607425200]}))
        expect(screen.getByTestId("weather-section")).toBeInTheDocument()
        expect(screen.getByTestId("current-weather-section")).toBeInTheDocument()
        expect(screen.getByTestId("day-forecast-1607338800")).toBeInTheDocument()
        expect(screen.getByTestId("day-forecast-1607425200")).toBeInTheDocument()
        expect(screen.queryByTestId("weather-error")).not.toBeInTheDocument()
    })

    it("renders error when there is one", () => {
        const store = createStore()
        renderWeather(store)
        store.dispatch(setLocationError('Melbourne', 'Melbourne not found'))
        expect(screen.getByTestId("weather-error")).toBeInTheDocument()
    })
})
