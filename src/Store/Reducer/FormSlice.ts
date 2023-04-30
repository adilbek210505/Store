import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IFormsState} from "../../Types/Forms";


const initialState: IFormsState = {
    modal: true
}

export const formSlice = createSlice({
    name: "FORM",
    initialState,
    reducers: {
        modalWindow(state,action: PayloadAction<boolean>) {
            state.modal = action.payload
        }
    }
})


export const { modalWindow } = formSlice.actions
export default formSlice.reducer