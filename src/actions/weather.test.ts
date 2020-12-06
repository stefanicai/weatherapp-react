import * as httpModule from "./http";
import {createStore} from "../app/store";
import {fetchLocation} from "./location";
import {getCurrentWeather, getDailyForecast} from "../app/selectors";
import {mockCurrentWeather, mockDayForecast_1607338800, mockDayForecast_1607425200} from "../mockData";
import {fetchWeather} from "./weather";

describe("weather actions", () => {
    it("should populate the store only with relevant props when successful", async () => {
        jest.spyOn(httpModule, 'http').mockImplementation(async () => ({
            current: {...mockCurrentWeather, someOtherProp: 'should be removed'},
            daily: [{...mockDayForecast_1607425200, someOtherProp: 'should be removed'}, mockDayForecast_1607338800]
        }))
        const store = createStore()
        await store.dispatch(fetchWeather({lon: '100', lat: '100'}, "Melbourne"))
        const currentWeather = getCurrentWeather(store.getState())
        expect(currentWeather).toEqual(mockCurrentWeather)
        const dayForcasts = getDailyForecast(store.getState())
        expect(dayForcasts).toEqual([mockDayForecast_1607425200, mockDayForecast_1607338800])
    })
})