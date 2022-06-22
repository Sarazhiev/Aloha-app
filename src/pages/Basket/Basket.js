import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {FaTrashAlt} from 'react-icons/fa'
import img from './Rectangle 10 (4).png'
import Order from "./Order/Order";
import {useDispatch, useSelector} from "react-redux"
import {removeCart, updateCart} from "../../redux/reducers/basket";
import img2 from "../Favorites/empty.png";

const Basket = () => {
    const basket = useSelector(s => s.basket.basket);
    const dispatch = useDispatch();

    return (
        <div className='basket'>
            <div className="container">
                <div className="catalog__crumbs">
                    <Link className="catalog__link" to='/'>Главная</Link>
                    >
                    <NavLink to='/product' className="catalog__link">Корзина</NavLink>
                </div>
                {
                    basket.length ?
                    <>
                        <h2 className='basket__title'>Ваш заказ</h2>
                        <div className='basket__content'>
                            {
                                basket.map((item, idx) => (
                                    <ul className='basket__list'>
                                        <li><img className='basket__img' src={img} alt=""/></li>
                                        <li className='basket__item'>{item.title}</li>
                                        <li className='basket__item basket__item-green' style={{background: item.color}}/>
                                        <li className='basket__item'>{item.size}</li>
                                        <li className='basket__item '><input className='basket__item-input' value={item.count} type="number"/></li>
                                        <li className='basket__item basket__item-price'>{item.price}</li>
                                        <li className='basket__item basket__item-trash' onClick={() => dispatch(removeCart({arr: basket.filter((el) => {
                                                return item.id !== el.id || item.color !== el.color || item.size !== el.size
                                            })}))}><FaTrashAlt/></li>
                                    </ul>
                                ))
                            }
                            <h4 className='basket__sum'>К оплате: <span className='basket__price'>15250 грн</span> </h4>
                        </div>
                        <Order/>
                    </>
                        :
                        <div className='favorites__info'>
                            <h2 className='favorites__title'>Ваша карзина пуста!</h2>
                            <Link to='/catalog/all'><img src={img2} alt=""/></Link>

                        </div>
                }


            </div>
        </div>
    );
};

export default Basket;