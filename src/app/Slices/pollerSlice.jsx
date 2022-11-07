import { createSlice } from "@reduxjs/toolkit";


const pollerSlice = createSlice({
    name: 'answers',
    initialState:[],
    reducers: {
        putAnswers(state, action){
            state.push(action.payload);
        },

    }
})


export const {putAnswers} = pollerSlice.actions
export default pollerSlice.reducer