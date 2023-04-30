import {appDispatch} from "../../index";
import {
    currentDefault,
    fetchIngError,
    fetchIngSuccess,
    fetchProducts,
    formComponents,
    getValueStr,
    modeUpDate,
    setValues,
    upDateImage
} from "../ProductSlice";
import axios from "axios";

export const fetchProduct = () => async (dispatch: appDispatch) => {
    try {
        dispatch(fetchProducts())
        const url = await axios(`https://fakestoreapi.com/products`)
        const {data} = await url
        dispatch(fetchIngSuccess(data))
    } catch (e) {
        dispatch(fetchIngError("Error...Adil"))
    }
}

export const CurrentAllDefaults = (e: any) => (dispatch: appDispatch) => {
    dispatch(currentDefault(e))
}

export const modeDateAdil = (mode: any) => (dispatch: appDispatch) => {
    dispatch(modeUpDate(mode))
}

export const setValueName = (values: any) => (dispatch: appDispatch) => {
    dispatch(setValues(values))
}

export const fetchFormProduct = (e: any, newProduct: any) => async (dispatch: appDispatch) => {
    dispatch(formComponents(await axios.post(`https://fakestoreapi.com/products`, newProduct)))
}

export const getValueString = (values: any) => (dispatch: appDispatch) => {
    dispatch(getValueStr(values))
}

export const upDateImageAdil = (up: boolean) => (dispatch: appDispatch) => {
    dispatch(upDateImage(up))
}

