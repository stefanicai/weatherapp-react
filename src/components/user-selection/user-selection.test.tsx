import {render, screen} from "@testing-library/react"
import {Provider} from "react-redux"
import React from "react";
import {UserSelection} from "."
import {createStore} from "../../app/store";

const renderUserSelection = (store: ReturnType<typeof createStore>) => render(
    <Provider store={store}>
        <UserSelection/>
    </Provider>
)

describe("<UserSelection />", () => {
    it("renders the weather component when no weather data is available", () => {
        const store = createStore()
        renderUserSelection(store)
        expect(screen.getByTestId("units-section")).toBeInTheDocument()
        expect(screen.getByTestId("location-section")).toBeInTheDocument()
        expect(screen.getByTestId("location-submit")).toBeInTheDocument()
        expect(screen.getByTestId("units-submit")).toBeInTheDocument()
        expect(screen.getByLabelText("Location")).toBeInTheDocument()
        expect(screen.getByTestId("units-select")).toBeInTheDocument()
    })
})