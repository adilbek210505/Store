import React from 'react';
import {UseAppSelector} from "../../Hooks/ReducerHooks";
import ProductCard from "../Product/ProductCard";
import {useNavigate} from "react-router-dom";

const Favorite = () => {
    const {favorite} = UseAppSelector(s => s.FavoriteSliceReducer)
    const navigate = useNavigate()

    return (
        <>
            {
                favorite.length ?
                    <div className="pt-32 flex flex-wrap justify-evenly">
                        {
                            favorite.map(el => <ProductCard el={el}/>)
                        }
                    </div>
                    :
                    <div className="flex justify-center  my-32">
                        <button onClick={() => navigate("/")} className="border-2 bg-black/50 rounded border-black py-8 px-44">
                            open Main
                        </button>
                    </div>
            }
        </>
    );
};

export default Favorite;