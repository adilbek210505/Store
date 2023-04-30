import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {appDispatch, rootState} from "../Store";


export const UseAppSelector: TypedUseSelectorHook<rootState> = useSelector


export const UseAppDispatch = () => useDispatch<appDispatch>()