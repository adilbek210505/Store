import React from 'react';
import {UseAppSelector} from "../../Hooks/ReducerHooks";
import BasketCard from "./BasketCard";
import {useNavigate} from "react-router-dom";

const Basket = () => {
    const navigate = useNavigate()
    const {basket} = UseAppSelector(s => s.BasketSliceReducer)

    return (
        <div className="pt-32">
            {
                basket.length ?
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead
                                className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    image
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    quantity
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    delete
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                basket.map(el => <BasketCard el={el}/>)
                            }
                            </tbody>
                        </table>
                    </div>
                    :
                    <div className="flex justify-center my-32">
                        <button onClick={() => navigate("/")} className="border-2 border-black py-8 px-44">
                            open Main
                        </button>
                    </div>
            }
        </div>
    );
};

export default Basket;