import React, {useEffect, useState} from 'react';
import {NavLink, Link, useParams} from "react-router-dom";
import {GoChevronRight} from 'react-icons/go'
import img from './img/1.png'
import {useDispatch, useSelector} from "react-redux";
import {motion, AnimatePresence} from "framer-motion"
import BtnForFavorites from "../BtnForFavorites/BtnForFavorites";
import 'antd/dist/antd.css';
import { Pagination } from 'antd';
import {animateScroll} from "react-scroll";
import {Select} from "@mui/material";
import MultipleSelectCheckmarks from "./SelectForGenderClothes/Select";
import img2 from "../Favorites/empty.png";


const Catalog = () => {

    const user = useSelector(s => s.user.user);
    const clothes = useSelector(s => s.clothes.clothes);
    const [page, setPage] = useState(1);

    const params = useParams();
    const [sort, setSort] = useState('');
    const [search, setSearch] = useState('');

    return (
        <section className='catalog'>
            <div className="container">
                <div className="catalog__crumbs">
                    <Link className="catalog__link" to='/'>Главная</Link>
                    <GoChevronRight/>
                    <span className="catalog__link">Каталог</span>
                </div>
                <div className='catalog__content'>
                    <div className='catalog__content-left'>
                        <h3 className='catalog__content-title'>Каталог</h3>
                        <ul className='catalog__content-list'>
                            <li className='catalog__content-item'>
                                <NavLink onClick={() => animateScroll.scrollToTop({
                                    delay: 0,
                                    duration: 0
                                })} className='catalog__content-item' to={`/catalog/new`}>New</NavLink>
                            </li>
                            <li className='catalog__content-item'>Bestsellers</li>
                            {
                                clothes && clothes
                                    .filter((item, idx, arr) => arr.map(el => el.category).indexOf(item.category) === idx)
                                    .map((item) => (
                                        <li key={item.category} className='catalog__content-item'>
                                            <NavLink onClick={() => animateScroll.scrollToTop({
                                                delay: 0,
                                                duration: 0
                                            })} className='catalog__content-item'
                                                     to={`/catalog/${item.category}`}>{item.category}</NavLink>
                                        </li>
                                    ))
                            }
                            <li className='catalog__content-item'>
                                <NavLink onClick={() => animateScroll.scrollToTop({
                                        delay: 0,
                                        duration: 0
                                    })} className='catalog__content-item' to={`/catalog/sale`}>Sale</NavLink>
                            </li>
                            <li className='catalog__content-item'>
                                <NavLink onClick={() => animateScroll.scrollToTop({
                                        delay: 0,
                                        duration: 0
                                    })} className='catalog__content-item' to={`/catalog/all`}>Посмотреть всё</NavLink>
                            </li>

                        </ul>
                    </div>
                    <div className='catalog__content-right'>
                        <input className='catalog__inputSearch' placeholder='search' id='search' value={search}
                               onChange={(e) => setSearch(e.target.value)} type="search"/>
                        <div className='shop__sort-type'>
                            {sort
                                ? <h3 className='catalog__info'>Сортировка
                                    : <span>{sort === 'big' ? 'к большему' : 'к меньшему'}</span></h3>
                                : ''
                            }
                            <div className='catalog__sorts'>
                                <button type='btn' className={`catalog__sort ${sort === 'big' ? 'active' : ''}`}
                                        onClick={() => setSort('big' !== sort ? 'big' : '')}>К большему
                                </button>
                                <button type='btn' className={`catalog__sort ${sort === 'less' ? 'active' : ''}`}
                                        onClick={() => setSort('less' !== sort ? 'less' : '')}>К меньшему
                                </button>
                                <MultipleSelectCheckmarks/>
                            </div>

                        </div>


                        <p>показано {clothes.filter((item, idx, array) => {
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
                        }).filter((item, idx) => idx + 1 <= page * 9 && idx >= page * 9 - 9).length} из {clothes.filter((item, idx, array) => {
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
                        }).length}</p>
                        <div className='catalog__content-row'>
                            {
                                clothes && clothes.filter((item) => item.title.toLowerCase().includes(search.toLowerCase())).length ?
                                    clothes.filter((item) => item.title.toLowerCase().includes(search.toLowerCase())).filter((item, idx, array) => {
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
                                    <AnimatePresence exitBeforeEnter onExitComplete presenceAffectsLayout>
                                        <motion.div
                                            initial={{opacity: 0, y: 100, x: 100}}
                                            animate={{opacity: 1, y: 0, x: 0}}
                                            exit={{opacity: 0, y: -100, x: 100}}
                                            transition={{duration: 0.6}}
                                            key={item.id} className='catalog__content-card'>
                                            <Link onClick={() => animateScroll.scrollToTop({
                                                delay: 0,
                                                duration: 0
                                            })} className='catalog__content-link' to={`/product/${item.id}`}>
                                                <img className='catalog__content-img' src={img} alt=""/>
                                            </Link>
                                            {
                                                user.email?.length || user.phoneNumber?.length ?
                                                    <BtnForFavorites item={item}/>  : ''
                                            }
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
                                                        <li style={{background: color, border: color === 'white' ? '0.1px solid grey' : ''}}
                                                            className='catalog__content-circle'> </li>
                                                    ))
                                                }
                                            </ul>
                                        </motion.div>
                                    </AnimatePresence>
                                ))
                                    : <div className='favorites__info'>
                                        <h2 className='favorites__title'>Такого товара еще нет!</h2>
                                        <img className='favorites__img' src={img2} alt=""/>
                                    </div>
                            }

                        </div>
                    </div>

                </div>

                {
                    clothes.filter((item, idx, array) => {
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
                    }).length > 9 ?
                        <Pagination onChange={setPage} simple Current={page} total={clothes.filter((item, idx, array) => {
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
                        }).length} pageSize={9} /> : ''
                }


            </div>

        </section>
    );
};

export default Catalog;