import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProduct, IProductState} from "../../Types/Product";

const initialState: IProductState = {
    product:  [],
    form: {},
    loader: false,
    error: "",
    defaultCurrent: "kg",
    allDefaultCurrent: {
        kg: [1, "Сом"],
        ru: [0.93, "Рубль"],
        usa: [0.011, "$"],
        kz: [5.20, "тенге"]
    },
    mode: false,
    value: {
        title: "",
        price: "",
        description: "",
    },
    getValue: false,
    upDate: true,
};


export const productSlice = createSlice({
    name: "PRODUCT",
    initialState,
    reducers: {
        fetchProducts(state) {
            state.loader = true
        },
        fetchIngSuccess(state, action: PayloadAction<IProduct[]>) {
            state.product = [...action.payload]
            state.loader = false
        },
        fetchIngError(state, action: PayloadAction<string>) {
            state.error = action.payload
            state.loader = false
        },
        currentDefault(state, action: PayloadAction<string>) {
            state.defaultCurrent = action.payload
        },
        modeUpDate(state, action: PayloadAction<boolean>) {
            state.mode = action.payload
        },
        setValues(state, action: PayloadAction<IProduct>) {
            state.value = action.payload
        },
        formComponents(state, action: PayloadAction<IProduct[]>) {
            state.form = action.payload
        },
        getValueStr(state,action: PayloadAction<boolean>) {
            state.getValue = action.payload
        },
        upDateImage(state,action: PayloadAction<boolean>) {
            state.upDate = action.payload
        },
    }
})


export const {
    fetchProducts,
    fetchIngSuccess,
    fetchIngError,
    currentDefault,
    modeUpDate,
    setValues,
    formComponents,
    getValueStr,
    upDateImage,
} = productSlice.actions
export default productSlice.reducer