import React from 'react';
import {removeCart} from "../../redux/reducers/basket";
import {FaTrashAlt} from 'react-icons/fa'

import {useDispatch} from "react-redux";
import BasketProduct from "./BasketProduct";


const BasketContent = ({basket, img}) => {
    const dispatch = useDispatch();
    return (
        <div className='basket__content'>
            {
                basket.map((item) => (
                    <React.Fragment key={item._id + item.size}>
                        <BasketProduct item={item} basket={basket} img={img}/>
                    </React.Fragment>


                ))
            }
            <div className='basket__under'>
                <button className='basket__clear' onClick={() => dispatch(removeCart({arr:  []}))}>Очистить корзину <span className='basket__trash' ><FaTrashAlt/></span></button>
                <h4 className='basket__sum'>К оплате: <span className='basket__price'>{basket.reduce((acc, rec) => acc + rec.count * rec.price, 0)}</span> </h4>
            </div>
        </div>
    );
};

export default BasketContent;