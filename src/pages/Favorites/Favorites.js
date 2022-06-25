import React from 'react';
import {Link, NavLink} from "react-router-dom";
import img from "../Catalog/img/1.png";
import {MdOutlineFavoriteBorder} from 'react-icons/md'
import {useSelector} from "react-redux";
import BtnForFavorites from "../BtnForFavorites/BtnForFavorites";
import img2 from './empty.png'
import Crumbs from "../Crumbs/Crumbs";
import FavoritesSkeleton from "../../Components/FavoritesSkeleton";

const Favorites = () => {

    const favorites = useSelector(s => s.user.user.favorites);
    return (
        <div className='favorites'>
            <div className="container">
                <Crumbs title='Избранное'/>
                <div className='catalog__content-row'>

                    {
                        !favorites ?  Array(10).fill(null).map(() => (
                            <FavoritesSkeleton/>
                        )) : favorites.length ? favorites.map((item) => (
                            <div className='catalog__content-card'>
                                <Link className='catalog__content-link' to={`/product/${item.id}`}>
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
                        )) :
                            <div className='favorites__info'>
                                <h2 className='favorites__title'>Ваш список избранных товаров пуст!</h2>
                                <img className='favorites__img' src={img2} alt=""/>
                            </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default Favorites;