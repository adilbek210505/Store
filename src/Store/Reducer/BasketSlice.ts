import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IBasket} from "../../Types/Basket";
import {IProduct} from "../../Types/Product";

const values: any = localStorage.getItem("basket")

const initialState: IBasket = {
    basket:JSON.parse(values) || []
}

export const BasketSlice = createSlice({
    name: "BASKET",
    initialState,
    reducers: {
        addToBasket(state,action: PayloadAction<IProduct>) {
            const fount = state.basket.find(el => el.id === action.payload.id)
            if (fount) {
                state.basket = state.basket.map(el => el.id === fount.id ? {...el, quantity: el.quantity +1}: el)
            } else {
                state.basket = [...state.basket, {...action.payload, quantity: 1}]
            }
        },
        deleteBaskets(state,{payload}: PayloadAction<IProduct>) {
            state.basket = state.basket.filter(el => el.id !== payload)
        },
        decBasket(state,{payload}: PayloadAction<IProduct>) {
            state.basket = state.basket.map(el => {
                if (el.id === payload.id) {
                    if (el.quantity > 1) {
                        return {...el, quantity: el.quantity -1}
                    } else return el
                } else return el
            })
        }
    }
})


export const {addToBasket,deleteBaskets, decBasket} = BasketSlice.actions
export default BasketSlice.reducer