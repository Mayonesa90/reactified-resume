import {createSlice} from '@reduxjs/toolkit'

export const themeSlice = createSlice({
    name: 'darkMode',
    initialState: {
        value: false,
    },
    reducers: {
        darkModeOn: (state) => {
            state.value = !state.value
        },
        toggleDarkMode: (state, action) => {
            state.value = !action.payload
        }
},
})

export const {darkModeOn, toggleDarkMode} = themeSlice.actions;

//Thunk
export const toggleAsync = (boolean) => (dispatch) => {
    setTimeout(() => {
        dispatch(toggleDarkMode(boolean))
    }, 1000)
}

//Selector
export const selectThemeValue = (state) => state.value

export default themeSlice.reducer

// //Reducer
// function toggleDarkMode(state = initialState, action) {
//     if (action.type === 'darkMode/setDarkMode') {
//         return {
//             ...state,
//             value: !state
//         }
//     }
//     return state
// }