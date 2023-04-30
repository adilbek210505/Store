import {combineReducers, configureStore} from "@reduxjs/toolkit";
import ProductSliceReducer from "./Reducer/ProductSlice";
import BasketSliceReducer from "./Reducer/BasketSlice";
import FavoriteSliceReducer from "./Reducer/FavoriteSlice";
import FormSliceReducer from "./Reducer/FormSlice";

const rootReducer = combineReducers({
    ProductSliceReducer,
    BasketSliceReducer,
    FavoriteSliceReducer,
    FormSliceReducer,
})

export const setUpStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type rootState = ReturnType<typeof rootReducer>
type appState = ReturnType<typeof setUpStore>
export type appDispatch = appState['dispatch']