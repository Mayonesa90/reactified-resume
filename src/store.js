import { configureStore } from "@reduxjs/toolkit";
import themeReducer from '../src/reducers/themeSlice'
import highLightReducer from '../src/reducers/highlightSlice'

export default configureStore({
    reducer: {
        darkMode: themeReducer,
        highLight: highLightReducer,
    },
})
