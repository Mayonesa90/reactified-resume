import { createSlice } from "@reduxjs/toolkit"

export const highlightSlice = createSlice({
    name: 'highLight',
    initialState: {
        value: 'bg-highlight-link',
    },
    reducers: {
        toggleHighlight(state) {
            state.value = state.value === 'bg-highlight-link' ? 'bg-highlight-link' : 'bg-dm-highlight-link'
        }
    }
})

export const {toggleHighlight} = highlightSlice.reducer

export default highlightSlice.reducer