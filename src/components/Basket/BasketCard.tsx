import React from 'react';
import {IProduct} from "../../Types/Product";
import {GiHeartMinus, GiHeartPlus} from "react-icons/gi";
import {UseAppDispatch, UseAppSelector} from "../../Hooks/ReducerHooks";
import {AddToBasket, deleteBasket} from "../../Store/Reducer/ActionCreators/BasketActions";
import { MdDelete } from 'react-icons/md';
import {decBasket} from "../../Store/Reducer/BasketSlice";

interface IBasketC {
    el: IProduct
}

const BasketCard = ({el}: IBasketC) => {
    const dispatch = UseAppDispatch()
    const {defaultCurrent, allDefaultCurrent} = UseAppSelector(s => s.ProductSliceReducer)


    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <h1>{el.title}</h1>
            </th>
            <td className="px-6 my-4">
                <img src={el.image} width={50} alt=""/>
            </td>
            <td className="px-6 my-8 flex justify-between w-[120px] text-lg">
                <button onClick={() => dispatch(decBasket(el))}><GiHeartMinus/></button>
                <p>{el.quantity}</p>
                <button onClick={() => dispatch(AddToBasket(el))}><GiHeartPlus/></button>
            </td>
            <td className="px-6 my-4">
                <p>{el.price * el.quantity * allDefaultCurrent[defaultCurrent][0]}</p>
            </td>
            <td className="px-6 my-4">
                <button onClick={() => dispatch(deleteBasket(el.id))}>
                    <MdDelete className="text-2xl"/>
                </button>
            </td>
        </tr>
    );
};

export default BasketCard;