import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface ThemeState {
    typeTheme: string
}

const initialState: ThemeState = {
    typeTheme: ''
}

export const themeSlice = createSlice(
    {
        name: 'theme',
        initialState,
        reducers: {
            changeTheme(state, action: PayloadAction<string>){
                state.typeTheme = action.payload
            }
        }
    })