import React from 'react';
import {Link, NavLink} from "react-router-dom";
import img from "../Catalog/img/1.png";
import {MdOutlineFavoriteBorder} from 'react-icons/md'

const Favorites = () => {
    return (
        <div className='favorites'>
            <div className="container">
                <div className="catalog__crumbs">
                    <Link className="catalog__link" to='/'>Главная</Link>
                    >
                    <NavLink className="catalog__link" to='/favorites'>Избранное</NavLink>
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
                </div>
            </div>
        </div>
    );
};

export default Favorites;