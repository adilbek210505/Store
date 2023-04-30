import React from 'react';
import {UseAppDispatch, UseAppSelector} from "../../../Hooks/ReducerHooks";
import {modalAction} from "../../../Store/Reducer/ActionCreators/FormsAction";
import FormComponents from "./FormComponents";

const Modal = () => {
    const {modal} = UseAppSelector(s => s.FormSliceReducer)
    const dispatch = UseAppDispatch()


    return (
        <>
            <button onClick={() => dispatch(modalAction(!modal))} className="fixed  right-20 bottom-20 border-2 border-red-800 pb-2.5 w-[40px] rounded-3xl h-[40px] text-3xl font-bold">+</button>

            <div hidden={modal} onClick={() => dispatch(modalAction(!modal))} className="w-full h-full bg-black/50 fixed left-0 top-0 z-10"></div>

            <div hidden={modal}>
                <div className="fixed z-20 left-[35%] backdrop-blur-md p-5 top-[25%] w-[400px] h-auto border-2 rounded border-black">
                   <FormComponents/>
                </div>
            </div>
        </>
    );
};

export default Modal;