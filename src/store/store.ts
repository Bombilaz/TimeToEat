import {combineReducers, configureStore} from "@reduxjs/toolkit";
import timeReducer from '../store/reducers/TimerSlice';

const rootReducer = combineReducers({
    timeReducer
})

export const setupStore = () =>{
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']