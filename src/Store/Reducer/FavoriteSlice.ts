import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IFavoriteState} from "../../Types/Favorite";
import {IProduct} from "../../Types/Product";


const initialState: IFavoriteState = {
    favorite: []
}

export const FavoriteSlice = createSlice({
    name: "FAVORITE",
    initialState,
    reducers: {
        addToFavorite(state,action: PayloadAction<IProduct>) {
            const fount = state.favorite.find(el => el.id === action.payload.id)
            if (fount) {
                state.favorite = state.favorite.filter(el => el.id !== fount.id)
            } else {
                state.favorite = [...state.favorite, action.payload]
            }
        }
    }
})


export const {addToFavorite } = FavoriteSlice.actions
export default FavoriteSlice.reducer