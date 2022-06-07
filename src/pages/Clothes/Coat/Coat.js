import React from 'react';
import {Link, NavLink} from "react-router-dom";
import img from './img/2.png'

const Coat = () => {
    return (
        <div className='coat'>
            <div className="container">
                <div className="catalog__crumbs">
                    <Link className="catalog__link" to='/'>Главная</Link>
                    >
                    <Link className="catalog__link" to='/catalog'>Каталог</Link>
                    >
                    <NavLink to='/coat' className="catalog__link">Пальто</NavLink>
                </div>
                <div className='coat__content'>
                    <div className='coat__content-card'>
                        <Link className='catalog__content-link' to='/product'>
                        <img className='coat__content-img' src={img} alt=""/>
                        </Link>
                        <p className='coat__content-title'>Синее пальто</p>
                        <p className='coat__content-price'>3150 грн</p>
                    </div>
                    <div className='coat__content-card'>
                        <Link className='catalog__content-link' to='/product'>
                            <img className='coat__content-img' src={img} alt=""/>
                        </Link>
                        <p className='coat__content-title'>Синее пальто</p>
                        <p className='coat__content-price'>3150 грн</p>
                    </div>
                    <div className='coat__content-card'>
                        <Link className='catalog__content-link' to='/product'>
                            <img className='coat__content-img' src={img} alt=""/>
                        </Link>
                        <p className='coat__content-title'>Синее пальто</p>
                        <p className='coat__content-price'>3150 грн</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coat;