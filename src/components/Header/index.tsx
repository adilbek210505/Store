import React from 'react';
import {Link} from "react-router-dom";
import {UseAppDispatch, UseAppSelector} from "../../Hooks/ReducerHooks";
import {CurrentAllDefaults, modeDateAdil,} from "../../Store/Reducer/ActionCreators/ProductActions";

const Header = () => {
    const dispatch = UseAppDispatch()
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => dispatch(CurrentAllDefaults(e.target.value))
    const {mode} = UseAppSelector(s => s.ProductSliceReducer)

    return (
        <div className="fixed z-50 text-blue-600 w-full bg-black/50 backdrop-blur-md left-0 top-0">
            <div className="flex justify-between text-2xl py-7 font-bold containers ">
                <div>
                    logo
                </div>
                <div className="flex  justify-between w-[300px]">
                    <Link to={"/"}>
                        Product
                    </Link>
                    <Link to={"/basket"}>
                        Basket
                    </Link>
                    <Link to={"/favorite"}>
                        Favorite
                    </Link>
                </div>
                <div>
                    <select onChange={handleChange}>
                        <option selected={true} value="kg">kg</option>
                        <option value="ru">ru</option>
                        <option value="usa">usa</option>
                    </select>
                </div>
                <div>
                    <button onClick={() => dispatch(modeDateAdil(!mode))}>{mode ? "white" : "black"}</button>
                </div>
            </div>
        </div>
    );
};

export default Header;