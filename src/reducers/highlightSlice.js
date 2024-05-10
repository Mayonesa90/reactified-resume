import { createSlice } from "@reduxjs/toolkit"

export const highLightSlice = createSlice({
    name: 'highLight',
    initialState: {
        value: 'bg-highlight-link',
    },
    reducers: {
        toggleHighlight(state) {
            state.value = state.value === 'bg-highlight-link' ? 'bg-dm-highlight-link' : 'bg-highlight-link';
        },
    },
})

export const {toggleHighlight} = highLightSlice.actions;

export default highLightSlice.reducer