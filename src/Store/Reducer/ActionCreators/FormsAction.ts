import {appDispatch} from "../../index";
import {modalWindow} from "../FormSlice";


export const modalAction = (mode: any) => (dispatch: appDispatch) => {
    dispatch(modalWindow(mode))
}




