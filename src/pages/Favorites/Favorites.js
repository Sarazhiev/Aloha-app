import React from 'react';
import {Link, NavLink} from "react-router-dom";
import img from "../Catalog/img/1.png";
import {MdOutlineFavoriteBorder} from 'react-icons/md'
import {useSelector} from "react-redux";
import BtnForFavorites from "../BtnForFavorites/BtnForFavorites";

const Favorites = () => {

    const favorites = useSelector(s => s.user.user.favorites)

    console.log(favorites)

    return (
        <div className='favorites'>
            <div className="container">
                <div className="catalog__crumbs">
                    <Link className="catalog__link" to='/'>Главная</Link>
                    >
                    <NavLink className="catalog__link" to='/favorites'>Избранное</NavLink>
                </div>
                <div className='catalog__content-row'>
                    {favorites && favorites.map((item) => (
                        <div className='catalog__content-card'>
                            <Link className='catalog__content-link' to='/product'>
                                <img className='catalog__content-img' src={img} alt=""/>
                            </Link>
                            <BtnForFavorites item={item}/>
                            <p className='catalog__content-name'>{item.title}</p>
                            <p className='catalog__content-price'>{item.price} грн</p>
                            <ul className='catalog__content-sizes'>
                                {
                                    item.size.map((size) => (
                                        <li className='catalog__content-size'>{size}</li>
                                    ))
                                }
                            </ul>
                            <ul className='catalog__content-colors'>
                                {
                                    item.colors.map((color) => (
                                        <li style={{background: color }} className='catalog__content-circle'> </li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Favorites;