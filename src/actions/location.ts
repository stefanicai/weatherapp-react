import {AppThunk} from "../app/store"
import {API_HOST, API_KEY} from "./constants"
import {Location} from "../types"
import {http} from "./http"
import {setLocation, setLocationError} from "../reducers/location-slice"

interface FetchLocationResponse {
    coord: Location
    error?: string
}

export const fetchLocation = (city: string): AppThunk => async dispatch => {
    try {
        const data = await http<FetchLocationResponse>(`${API_HOST}/weather?q=${city}&appid=${API_KEY}`)
        await dispatch(setLocation({name: city, ...data.coord}))
    }catch (e) {
        await dispatch(setLocationError(city, e.message))
    }
}