import React, {useState} from 'react';
import {AnimatePresence, motion} from "framer-motion";
import {Link} from "react-router-dom";
import {animateScroll} from "react-scroll";
import img from "./img/1.png";
import BtnForFavorites from "../BtnForFavorites/BtnForFavorites";
import img2 from "../Favorites/empty.png";
import {useSelector} from "react-redux";
import Card from "../../Components/Card/Card";

const CatalogRow = ({clothes, sort, params, page, user, search}) => {

    const status = useSelector(s => s.clothes.status)


    return (
        <div className='catalog__content-row'>
            {
                clothes && clothes.filter((item) => item.title.toLowerCase().includes(search.toLowerCase())).length ?
                    clothes.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
                        .filter((item) => {
                            switch (status){
                                case 'man':
                                    return item.gender === 'man' || item.gender === 'uni'
                                case 'woman':
                                    return item.gender === 'woman' || item.gender === 'uni'
                                default :
                                    return item
                            }
                        }).filter((item, idx, array) => {
                        switch (params.category) {
                            case 'all' :
                                return item;
                            case 'new' :
                                return idx > array.length - 5;
                            case 'sale' :
                                return item.priceSale;
                            default:
                                return item.category === params.category
                        }
                    }).sort((a, b) => {
                        if (sort === 'big') {
                            return (b.price) - (a.price)
                        } else if (sort === 'less') {
                            return (a.price) - (b.price)
                        }
                    }).filter((item, idx) => idx + 1 <= page * 9 && idx  >= page * 9 - 9).map((item) => (
                        <React.Fragment key={item._id}>
                            <Card item={item} user={user}/>
                        </React.Fragment>

                    ))
                    : <div className='favorites__info'>
                        <h2 className='favorites__title'>Такого товара еще нет!</h2>
                        <img className='favorites__img' src={img2} alt=""/>
                    </div>
            }

        </div>
    );
};

export default CatalogRow;