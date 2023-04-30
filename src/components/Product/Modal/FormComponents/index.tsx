import React, {useState} from 'react';
import {UseAppDispatch, UseAppSelector} from "../../../../Hooks/ReducerHooks";
import {fetchFormProduct, getValueString, setValueName} from "../../../../Store/Reducer/ActionCreators/ProductActions";
import {formComponents} from "../../../../Store/Reducer/ProductSlice";
import axios from "axios";
import {IProduct} from "../../../../Types/Product";
import {modalAction} from "../../../../Store/Reducer/ActionCreators/FormsAction";




const FormComponents = () => {
    const dispatch = UseAppDispatch()
    const {value, getValue} = UseAppSelector(s => s.ProductSliceReducer)
    const [file,setFile] = useState<string | ArrayBuffer | any>("")

    const  fileReader = new FileReader()

    fileReader.onloadend = () => {
        setFile(fileReader.result)
    }

    const handleFile = (e: React.ChangeEvent<any>) => fileReader.readAsDataURL(e.target.files[0])

    const newProduct: IProduct = {
        title: value.title,
        price: +value.price,
        description: value.description,
        image: file || "https://i.pravatar.cc",
        id: 1,
        category: "electronic",
    }

    const  handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch(setValueName({...value, [e.target.name]: e.target.value}))
    }

    const formChange = async (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        e.preventDefault()
        if (value.title.trim().length !== 0 &&  value.description.trim().length !== 0) {
            dispatch(getValueString(false))
            dispatch(fetchFormProduct(e,newProduct))
            dispatch(modalAction(true))
        } else {
            dispatch(getValueString(true))
        }
        dispatch(setValueName({title: "", price: "", description: ""}))
    }
    return (
        <form onSubmit={formChange}>
            <img src={file} width={100} alt=""/>
            <input value={value.title} type="text" name={"title"} onChange={handleChange}  className={`${getValue ? value.title !== "" ?  "" : "border-2 border-red-600" : "border-2 border-black "} w-full h-[40px]  rounded pl-1`} placeholder="title"/>
            <input value={value.price} type="number" name={"price"} onChange={handleChange}  className={`${getValue ? value.price !== "" ?  "" : "border-2 border-red-600" : "border-2 border-black"}  border-2 border-black w-full my-6 h-[40px]  rounded pl-1`} placeholder="price"/>
            <textarea value={value.description} name={"description"} onChange={handleChange}  className={`${getValue ? value.description !== "" ?  "" : "border-2 border-red-600" : "border-2 border-black"} border-2 border-black w-full rounded pl-1`} placeholder="description"/>
            <input type="file" onChange={handleFile}/>
            <button onClick={formChange} className="border-2 border-black rounded w-[200px] h-[40px] translate-x-20 my-5 ">creat</button>
        </form>
    );
};

export default FormComponents;