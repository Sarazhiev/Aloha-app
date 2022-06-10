import React, {useEffect, useState} from 'react';
import {NavLink, Link, useParams} from "react-router-dom";
import {GoChevronRight} from 'react-icons/go'
import {MdOutlineFavoriteBorder} from 'react-icons/md'
import img from './img/1.png'
import {useSelector} from "react-redux";
import { motion, AnimatePresence } from "framer-motion"
import {collection, doc, getDocs, updateDoc} from "@firebase/firestore";
import {db} from "../../firebase/firebase";

const Catalog = () => {

    const user = useSelector(s => s.user.user)
    const clothes = useSelector(s => s.clothes.clothes );
    const params = useParams();
    const [sort, setSort] = useState('');




    const addFavoritesForUser =  (obj) => {
        getDocs(collection(db,'users'))
            .then((res) => {
                console.log(res.docs.map(el => ({...el.data(), id:el.id}) ).find(item => item.email === user.email).id)
                updateDoc(doc(db, 'users', res.docs.map(el => ({...el.data(), id:el.id}) ).find(item => item.email === user.email).id), obj)
            })

    };

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
                            <li className='catalog__content-item'>
                                <Link to={`/catalog/new`}>New</Link>
                                </li>
                            <li className='catalog__content-item'>Bestsellers</li>
                            {
                                clothes && clothes
                                    .filter((item, idx, arr) => arr.map(el => el.category).indexOf(item.category) === idx)
                                    .map((item) => (
                                        <li key={item.category} className='catalog__content-item'>
                                            <Link to={`/catalog/${item.category}`}>{item.category}</Link>
                                        </li>
                                    ))

                            }
                            <li className='catalog__content-item'>
                                <Link to={`/catalog/sale`}>Sale</Link>
                                </li>
                            <li className='catalog__content-item'>
                                <Link to={`/catalog/all`}>Посмотреть всё</Link>
                            </li>

                        </ul>
                    </div>
                    <div className='catalog__content-right'>
                        <div className='catalog__content-selects'>
                            <select className='catalog__content-select' name="1">
                                <option value="1">Сортировать</option>
                                <option value="2">К большему</option>
                                <option value="3">К меньшему</option>
                            </select>
                        </div>
                        <div className='catalog__content-row'>
                            {
                                clothes && clothes.filter((item, idx, array) => {
                                    switch (params.category) {
                                        case 'all' :  return item;
                                        case 'new' : return idx > array.length - 5;
                                        case 'sale' : return item.priceSale;
                                        default:  return item.category === params.category
                                    }
                                }).map((item) => (
                                    <AnimatePresence exitBeforeEnter onExitComplete presenceAffectsLayout >
                                    <motion.div
                                        initial={{ opacity: 0 , y: 100, x: 100}}
                                        animate={{ opacity: 1 ,y: 0 , x: 0}}
                                        exit={{ opacity: 0, y: -100, x: 100 }}
                                        transition={{ duration: 0.6 }}
                                        key={item.id} className='catalog__content-card'>
                                        <Link className='catalog__content-link' to={`/product/${item.id}`}>
                                            <img className='catalog__content-img' src={img} alt=""/>
                                        </Link>
                                        <button className='catalog__content-fav' style={{color: user.favorites.findIndex(el => el.id === item.id ) >= 0 ? "tomato" : ''}} onClick={ () =>{
                                          addFavoritesForUser( {
                                            ...user,
                                            favorites:  user.favorites.findIndex(el => el.id === item.id) >= 0 ? user.favorites.filter((el) => el.id !== item.id) : [...user.favorites, item]
                                        })}}><MdOutlineFavoriteBorder/></button>
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
                                    </motion.div>
                                    </AnimatePresence>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default Catalog;