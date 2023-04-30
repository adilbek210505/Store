import React from 'react';
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import Product from "./components/Product";
import Basket from "./components/Basket";
import {UseAppSelector} from "./Hooks/ReducerHooks";
import Favorite from "./components/Favorite";
import ProductModal from "./components/Product/ProductModal";

const App = () => {
    const {mode} = UseAppSelector(s => s.ProductSliceReducer)

    return (
        <div style={{
            background: mode ? "black" : "",
            color: mode ? "white" : "",
        }}>
            <div className="containers">
                <Routes>
                    <Route path={"/"} element={<Product/>}/>
                    <Route path={"/basket"} element={<Basket/>}/>
                    <Route path={"/favorite"} element={<Favorite/>}/>
                    <Route path={"/productModal/:ModalID"} element={<ProductModal/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default App;