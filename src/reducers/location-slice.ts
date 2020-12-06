import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {AppThunk, RootState} from '../app/store'
import {Location} from "../types"

interface LocationState {
    location: Location
    error?: string
}

const initialState: LocationState = {
    location: {
        lon: '',
        lat: '',
        name: '',
    },
    error: '',
};

export const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        fetchLocationSuccess: (state, action: PayloadAction<Location>) => {
            return { location: action.payload, error: ''}
        },
        fetchLocationFailure: (state, action: PayloadAction<{ name: string, error: string }>) => {
            return { error: action.payload.error, location: {lon: '', lat: '', name: action.payload.name} }
        }
    },
})

export const {fetchLocationFailure, fetchLocationSuccess} = locationSlice.actions

export const setLocation = (location: Location): AppThunk => async dispatch => {
    await dispatch(fetchLocationSuccess(location))
}

export const setLocationError = (name: string, error: string) : AppThunk => async dispatch => {
    await dispatch(fetchLocationFailure({name, error}))
}

export const getLocation = (state: LocationState) => state.location
export const getLocationError = (state: LocationState) => state.error

export default locationSlice.reducer
