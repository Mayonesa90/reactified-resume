import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
    name: 'darkMode',
    initialState: {
        value: false,
    },
    reducers: {
        toggleDarkMode(state) {
            state.value = state.value === false ? true : false;
            state.value = state.value === true ? document.body.classList.toggle("dark") : document.body.classList.toggle("dark");
        },
    },
},
)

export const {toggleDarkMode} = themeSlice.actions;

export default themeSlice.reducer


