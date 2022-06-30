import React, {useEffect, useState} from 'react';
import {removeCart, updateCart} from "../../redux/reducers/basket";
import {FaTrashAlt} from 'react-icons/fa'
import {useDispatch} from "react-redux";

const BasketProduct = ({img,item,basket}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        localStorage.setItem('basket', JSON.stringify(basket))
    }, [basket])

    return (
        <ul className='basket__list'>
            <li className='basket__item basket__item-trash' onClick={() => dispatch(removeCart({arr: basket.filter((el) => {
                    return item._id !== el._id || item.color !== el.color || item.size !== el.size
                })}))}><FaTrashAlt/></li>
            <li><img className='basket__img' src={img} alt=""/></li>
            <li className='basket__item'>{item.title}</li>
            <li className='basket__item basket__item-green' style={{background: item.color}}/>
            <li className='basket__item'>{item.size}</li>
            <li className='basket__item basket__item-price'>{item.price}</li>
            <li className='basket__item '>
                <input className='basket__item-input' min='1' max={item.inStock}  defaultValue={item.count} type="number" onChange={async (e)=> {
                   await dispatch(updateCart({arr:basket.map((el) => {
                        if (el._id === item._id && el.color === item.color && el.size  === item.size){
                            return {...el , count: e.target.value >= item.inStock ? item.inStock : e.target.value}
                        } else {
                            return el
                        }
                    })}))


            } }/></li>
            <li className='basket__item basket__item-price'>{item.price * item.count}</li>

        </ul>
    );
};

export default BasketProduct;