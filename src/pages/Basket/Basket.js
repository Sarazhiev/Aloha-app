import React from 'react';
import {Link, NavLink} from "react-router-dom";
import img from './Rectangle 10 (4).png'
import Order from "./Order/Order";
import {useSelector} from "react-redux"
import img2 from "../Favorites/empty.png";
import BasketContent from "./BasketContent";

const Basket = () => {
    const basket = useSelector(s => s.basket.basket);


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

                        <BasketContent basket={basket} img={img}/>

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