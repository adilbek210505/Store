import {appDispatch} from "../../index";
import {addToBasket, deleteBaskets} from "../BasketSlice";


export const AddToBasket = (el: any) => (dispatch: appDispatch) => {
    dispatch(addToBasket(el))
}
export const deleteBasket = (el: any) => (dispatch: appDispatch) => {
    dispatch(deleteBaskets(el))
}
export const decBasket = (el: any) => (dispatch: appDispatch) => {
    dispatch(decBasket(el))
}