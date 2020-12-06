import {render, screen} from "@testing-library/react"
import {createStore} from "../../app/store"
import {Provider} from "react-redux"
import React from "react"
import {mockDayForecast_1607425200} from '../../mockData'
import {DayForecast} from "."

const renderDayForecast = () => render(
    <Provider store={createStore()}>
        <DayForecast {...mockDayForecast_1607425200} />
    </Provider>
)

describe("<Weather />", () => {
    it("renders the weather component when no weather data is available", () => {
        renderDayForecast()
        expect(screen.getByTestId("day-forecast-1607425200")).toBeInTheDocument()
        expect(screen.getByText("Tuesday"))
        expect(screen.getByText(mockDayForecast_1607425200.weather[0].description))
    })
})