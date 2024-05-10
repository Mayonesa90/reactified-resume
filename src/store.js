import { configureStore } from "@reduxjs/toolkit";
import themeReducer from '../src/reducers/themeSlice'

export default configureStore({
    reducer: {
        toggle: themeReducer,
    },
})

//   //States
//   const [darkMode, setDarkMode] = useState(false)
//   const [toggleBtn, setToggleBtn] = useState(ToggleBtnLm)
//   const [highLight, setHighLight] = useState('bg-highlight-link')
  
//   //Actions
//   function toggleDarkMode(){
//       setDarkMode(!darkMode)
//       setToggleBtn(darkMode ? ToggleBtnLm : ToggleBtnDm)
//       document.body.classList.toggle("dark")
//       setHighLight(darkMode ? "bg-highlight-link" : "bg-dm-highlight-link")
//   }

// //Action object
// const darkModeAction = {
//     type: 'darkMode/setDarkMode',
//     payload: 'Set dark mode'
// }

// //Action creator
// const setDarkMode = darkModeOn => {
//     return {
//         type: 'darkMode/setDarkMode',
//         payload: darkModeOn
//     }
// }

// const initialState = {
//     value: false,
// }

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



// store.dispatch({type: 'darkMode/setDarkMode'}) //calls the action creator to disptach the right action

// console.log(store.getState())

// //Selector
// const selectThemeValue = state => state.value

// const currentThemeValue = selectThemeValue(store.getState())

// console.log(currentThemeValue)


// export default store;