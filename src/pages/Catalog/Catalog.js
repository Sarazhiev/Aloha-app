import React from 'react';
import {NavLink, Link} from "react-router-dom";
import {GoChevronRight} from 'react-icons/go'
import {MdOutlineFavoriteBorder} from 'react-icons/md'
import img from './img/1.png'
import img2 from './img/2.png'
import img3 from './img/3.png'
import img4 from './img/4.png'

const Catalog = () => {
    return (
        <section className='catalog'>
            <div className="container">
                <div className="catalog__crumbs">
                    <Link className="catalog__link" to='/'>Главная</Link>
                    <GoChevronRight/>
                    <NavLink className="catalog__link" to='/catalog'>Каталог</NavLink>
                </div>
                <div className='catalog__content'>
                    <div className='catalog__content-left'>
                        <h3 className='catalog__content-title'>Каталог</h3>
                        <ul className='catalog__content-list'>
                            <li className='catalog__content-item'>New</li>
                            <li className='catalog__content-item'>Bestsellers</li>
                            <li className='catalog__content-item'>Верхняя одежда</li>
                            <li className='catalog__content-item'>Шубы</li>
                            <li className='catalog__content-item'>Тренчи</li>
                            <Link to='/coat' className='catalog__content-item'>Пальто</Link>
                            <li className='catalog__content-item'>Пуховики и жилеты</li>
                            <li className='catalog__content-item'>Костюмы</li>
                            <li className='catalog__content-item'>Жакеты</li>
                            <li className='catalog__content-item'>Платья</li>
                            <li className='catalog__content-item'>Рубашки и блузы</li>
                            <li className='catalog__content-item'>Юбки</li>
                            <li className='catalog__content-item'>Футболки и топы</li>
                            <li className='catalog__content-item'>Аксессуары</li>
                            <li className='catalog__content-item'>Sale</li>
                            <li className='catalog__content-item'>Summer</li>
                            <li className='catalog__content-item'>Посмотреть всё</li>
                        </ul>
                    </div>
                    <div className='catalog__content-right'>
                        <div className='catalog__content-selects'>
                            <select className='catalog__content-select' name="1">
                                <option value="1">Размер</option>
                            </select>
                            <select className='catalog__content-select' name="1">
                                <option value="1">Цвет</option>
                            </select>
                            <select className='catalog__content-select' name="1">
                                <option value="1">Цена</option>
                            </select>
                            <select className='catalog__content-select' name="1">
                                <option value="1">Сортировать по</option>
                            </select>
                        </div>
                        <div className='catalog__content-row'>
                            <div className='catalog__content-card'>
                                <Link className='catalog__content-link' to='/product'>
                                <img className='catalog__content-img' src={img} alt=""/>
                                </Link>
                                <button className='catalog__content-fav'><MdOutlineFavoriteBorder/></button>
                                <p className='catalog__content-name'>Белая куртка</p>
                                <p className='catalog__content-price'>2900 грн</p>
                                <ul className='catalog__content-sizes'>
                                    <li className='catalog__content-size'>XXS</li>
                                    <li className='catalog__content-size'>XS</li>
                                    <li className='catalog__content-size'>S</li>
                                    <li className='catalog__content-size'>M</li>
                                    <li className='catalog__content-size'>L</li>
                                </ul>
                                <ul className='catalog__content-colors'>
                                    <li className='catalog__content-white'> </li>
                                    <li className='catalog__content-blue'> </li>
                                    <li className='catalog__content-yellow'> </li>
                                </ul>
                            </div>
                            <div className='catalog__content-card'>
                                <Link className='catalog__content-link' to='/product'>
                                    <img className='catalog__content-img' src={img2} alt=""/>
                                </Link>
                                <button className='catalog__content-fav'><MdOutlineFavoriteBorder/></button>
                                <p className='catalog__content-name'>Синее пальто</p>
                                <p className='catalog__content-price'>3150 грн</p>
                                <ul className='catalog__content-sizes'>
                                    <li className='catalog__content-size'>XS</li>
                                    <li className='catalog__content-size'>M</li>
                                    <li className='catalog__content-size'>L</li>
                                </ul>
                                <ul className='catalog__content-colors'>
                                    <li className='catalog__content-white'></li>
                                    <li className='catalog__content-blue'> </li>
                                    <li className='catalog__content-yellow'> </li>
                                </ul>
                            </div>
                            <div className='catalog__content-card'>
                                <Link className='catalog__content-link' to='/product'>
                                <img className='catalog__content-img' src={img3} alt=""/>
                                </Link>
                                <button className='catalog__content-fav'><MdOutlineFavoriteBorder/></button>
                                <p className='catalog__content-name'>Бежевая шуба</p>
                                <p className='catalog__content-price'>4200 грн</p>
                                <ul className='catalog__content-sizes'>
                                    <li className='catalog__content-size'>XS</li>
                                    <li className='catalog__content-size'>S</li>
                                    <li className='catalog__content-size'>L</li>
                                </ul>
                                <ul className='catalog__content-colors'>
                                    <li className='catalog__content-white'> </li>
                                    <li className='catalog__content-blue'> </li>
                                    <li className='catalog__content-yellow'> </li>
                                </ul>
                            </div>
                            <div className='catalog__content-card'>
                                <Link className='catalog__content-link' to='/product'>
                                <img className='catalog__content-img' src={img4} alt=""/>
                                </Link>
                                <button className='catalog__content-fav'><MdOutlineFavoriteBorder/></button>
                                <p className='catalog__content-name'>Синяя парка</p>
                                <p className='catalog__content-price'>2900 грн</p>
                                <ul className='catalog__content-sizes'>
                                    <li className='catalog__content-size'>XXS</li>
                                    <li className='catalog__content-size'>XS</li>
                                    <li className='catalog__content-size'>S</li>
                                    <li className='catalog__content-size'>M</li>
                                    <li className='catalog__content-size'>L</li>
                                </ul>
                                <ul className='catalog__content-colors'>
                                    <li className='catalog__content-white'> </li>
                                    <li className='catalog__content-blue'> </li>
                                    <li className='catalog__content-yellow'> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default Catalog;