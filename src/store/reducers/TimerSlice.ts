import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface TimerState {
    time: number,
    isPlaying: boolean
}

const initialState: TimerState = {
    time: 1800,
    isPlaying: false
}

export const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        decrement(state, action: PayloadAction<number>){
            state.time -= action.payload;
        },
        changeTypeButton(state){
            state.isPlaying = !state.isPlaying
        }
    }
})

export default timerSlice.reducer