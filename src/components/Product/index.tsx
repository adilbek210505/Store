import React, {useEffect} from 'react';
import {UseAppDispatch, UseAppSelector} from "../../Hooks/ReducerHooks";
import {fetchProduct} from "../../Store/Reducer/ActionCreators/ProductActions";
import ProductCard from "./ProductCard";
import Modal from "./Modal";

const Product = () => {
    useEffect(() => {
        dispatch(fetchProduct())
    }, [])
    const {product, loader, error, form} = UseAppSelector(s => s.ProductSliceReducer)
    const dispatch = UseAppDispatch()

    if (loader) {
        return <h1>loading...</h1>
    }
    if (error) {
        return <h1 className="mt-52 text-center text-3xl font-bold ">{error}...404</h1>
    }


    return (
        <div className="flex flex-wrap justify-between items-start pt-32">
            <Modal/>
            {
                product.map(el => <ProductCard key={el.id} el={el}/>)
            }
        </div>
    );
};

export default Product;