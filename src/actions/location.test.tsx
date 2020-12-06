import {createStore} from "../app/store"
import {fetchLocation} from "./location"
import * as httpModule from './http'
import {getLocation, getError} from "../app/selectors";

describe("location actions", () => {
    it("should populate the store when successful", async () => {
        jest.spyOn(httpModule, 'http').mockImplementation(async () => ({
            coord: {
                lon: '10',
                lat: '10',
            }
        }))
        const store = createStore()
        await store.dispatch(fetchLocation("Melbourne"))
        const location = getLocation(store.getState())
        expect(location).toEqual({lon: '10', lat: '10', name: 'Melbourne'})
    })

    it("should save error to store when call fails", async () => {
        jest.spyOn(httpModule, 'http').mockImplementation(async () => {
            throw new Error('Failed')
        })
        const store = createStore()
        await store.dispatch(fetchLocation("Melbourne"))
        const location = getLocation(store.getState())
        expect(location).toEqual({lon: '', lat: '', name: 'Melbourne'})
        const error = getError(store.getState())
        expect(error).toEqual('Failed')
    })
})