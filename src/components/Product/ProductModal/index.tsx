import React from 'react';
import {UseAppSelector} from "../../../Hooks/ReducerHooks";
import {useParams} from "react-router-dom";


const ProductModal = () => {
    const {product, allDefaultCurrent, defaultCurrent} = UseAppSelector(s => s.ProductSliceReducer)
    const {ModalID} = useParams()

    return (
        <>
            <div className="mt-40">
                {
                    product.map(el => (
                        <div key={el.id}>
                            {
                                el.id === Number(ModalID) ?
                                    <div className="flex items-center justify-between w-[90%]">
                                        <img width={400} src={el.image} alt="image"/>
                                        <div className="w-[500px]">
                                            <h1 className="font-bold text-2xl">{el.title}</h1>
                                            <p className="font-mono text-xl my-5">{el.description}</p>
                                            <p className="text-xl font-light">{el.price * allDefaultCurrent[defaultCurrent][0]} {allDefaultCurrent[defaultCurrent][1]}</p>
                                            <h3 className="font-extrabold   text-lg">{el.category}</h3>
                                        </div>
                                    </div>
                                    :
                                    <div>

                                    </div>
                            }
                        </div>
                    ))
                }

            </div>
        </>
    );
};

export default ProductModal;