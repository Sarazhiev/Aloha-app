import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {FaTrashAlt} from 'react-icons/fa'
import img from './Rectangle 10 (4).png'
import Order from "./Order/Order";

const Basket = () => {
    return (
        <div className='basket'>
            <div className="container">
                <div className="catalog__crumbs">
                    <Link className="catalog__link" to='/'>Главная</Link>
                    >
                    <NavLink to='/product' className="catalog__link">Корзина</NavLink>
                </div>
                <h2 className='basket__title'>Ваш заказ</h2>
                <div className='basket__content'>
                    <ul className='basket__list'>
                        <li><img className='basket__img' src={img} alt=""/></li>
                        <li className='basket__item'>Кремовое пальто</li>
                        <li className='basket__item basket__item-green'> </li>
                        <li className='basket__item'>L</li>
                        <li className='basket__item '><input className='basket__item-input' defaultValue='2' type="number"/></li>
                        <li className='basket__item basket__item-price'>9450 грн</li>
                        <li className='basket__item basket__item-trash'><FaTrashAlt/></li>
                    </ul>
                    <h4 className='basket__sum'>К оплате: <span className='basket__price'>15250 грн</span> </h4>
                </div>
                <Order/>
            </div>
        </div>
    );
};

export default Basket;