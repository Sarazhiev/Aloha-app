import React from 'react';
import {addCart, addCartPlus} from "../../redux/reducers/basket";

const ProductBtns = ({item, count, setCount, basket, color, size, dispatch}) => {
    return (
        <div className='product__btns'>
            <input className='product__input' style={{color: !item.inStock ? "grey" : "black"}}
                   disabled={!item.inStock} min='1' max={item.inStock} value={count}
                   onChange={(e) => setCount(e.target.value >= item.inStock ? item.inStock : e.target.value)}
                   type="number"/>
            {
                // user.email?.length || user.phoneNumber?.length ?
                <button style={{
                    background: basket.findIndex(el => el.id === item.id) >= 0 ? "tomato" : '',
                    color: basket.findIndex(el => el.id === item.id) >= 0 ? "white" : '',
                    border: basket.findIndex(el => el.id === item.id) >= 0 ? "none" : ''
                }} className='product__btn1' type='button' onClick={() => {
                    let product = {
                        id: item.id,
                        title: item.title,
                        image: item.image,
                        color,
                        size,
                        count,
                        price: item.priceSale || item.price,
                        category: item.category
                    };
                    let idx = basket.findIndex(item => item.id === product.id && item.color === product.color && item.size === product.size);
                    if (idx >= 0) {
                        dispatch(addCartPlus({arr:basket.map(item => {
                                if (item.id === product.id && item.color === product.color && item.size === product.size) {
                                    return {...item, count: +item.count + +product.count}
                                } else {
                                    return item
                                }
                            })}))
                    } else {
                        dispatch(addCart(product))
                    }


                }}>В КОРЗИНУ</button>

            }
        </div>
    );
};

export default ProductBtns;