import React, {useState} from 'react';
import {removeCart} from "../../redux/reducers/basket";
import {FaTrashAlt} from 'react-icons/fa'
import {useDispatch} from "react-redux";

const BasketProduct = ({img,item,basket}) => {
    const dispatch = useDispatch();
    const [count, setCount] = useState(item.count);
    return (
        <ul className='basket__list'>
            <li className='basket__item basket__item-trash' onClick={() => dispatch(removeCart({arr: basket.filter((el) => {
                    return item.id !== el.id || item.color !== el.color || item.size !== el.size
                })}))}><FaTrashAlt/></li>
            <li><img className='basket__img' src={img} alt=""/></li>
            <li className='basket__item'>{item.title}</li>
            <li className='basket__item basket__item-green' style={{background: item.color}}/>
            <li className='basket__item'>{item.size}</li>
            <li className='basket__item basket__item-price'>{item.price}</li>
            <li className='basket__item '>
                <input className='basket__item-input' min='1'  value={count} type="number" onChange={(e)=> {
                setCount(e.target.value >= item.inStock ? item.inStock : e.target.value)
            } }/></li>
            <li className='basket__item basket__item-price'>{item.price * item.count}</li>

        </ul>
    );
};

export default BasketProduct;