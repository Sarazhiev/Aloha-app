import React from 'react';
import {Link} from "react-router-dom";
import img from './Rectangle 10 (4).png'
import Order from "./Order/Order";
import {useSelector} from "react-redux"
import img2 from "../Favorites/empty.png";
import BasketContent from "./BasketContent";
import Crumbs from "../Crumbs/Crumbs";
import {ToastContainer} from "react-toastify";

const Basket = () => {
    const basket = useSelector(s => s.basket.basket);


    return (
        <div className='basket'>
            <div className="container">
                <Crumbs title='Корзина'/>
                {
                    basket.length ?
                    <>
                        <div className="basket__info">
                            <h3 className="basket__info-title">Ваши заказы</h3>
                            <ul className="basket__info-list">
                                <li className="basket__info-item basket__info-item2">Цвет</li>
                                <li className="basket__info-item basket__info-item2">Размер</li>
                                <li className="basket__info-item basket__info-item2">Цена</li>
                                <li className="basket__info-item basket__info-item2">Количество</li>
                                <li className="basket__info-item basket__info-item2">Всего</li>
                            </ul>
                        </div>


                        <BasketContent basket={basket} img={img}/>

                        <Order/>
                    </>
                        :
                        <div className='favorites__info'>
                            <h2 className='favorites__title'>Ваша карзина пуста!</h2>
                            <Link to='/catalog/all'><img src={img2} alt=""/></Link>

                        </div>
                }

                <ToastContainer
                    position="bottom-left"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />

            </div>
        </div>
    );
};

export default Basket;