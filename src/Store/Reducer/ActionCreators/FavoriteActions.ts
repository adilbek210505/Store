import {appDispatch} from "../../index";
import {addToFavorite} from "../FavoriteSlice";


export const AddToFavorite = (el: any) => (dispatch: appDispatch) => {
    dispatch(addToFavorite(el))
}