import React from 'react';
import {NavLink, Link, useParams} from "react-router-dom";
import {GoChevronRight} from 'react-icons/go'
import {MdOutlineFavoriteBorder} from 'react-icons/md'
import img from './img/1.png'
import img2 from './img/2.png'
import img3 from './img/3.png'
import img4 from './img/4.png'
import {useSelector} from "react-redux";

const Catalog = () => {

    const clothes = useSelector(s => s.clothes.clothes );
    const params = useParams();

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
                            {
                                clothes && clothes.filter((item, idx, array) => {
                                    switch (params.category) {
                                        case 'all' :  return item;
                                        case 'new' : return idx > array.length - 5;
                                        case 'sale' : return item.priceSale;
                                        default:  return item.category === params.category
                                    }
                                }).map((item) => (
                                    <div className='catalog__content-card'>
                                        <Link className='catalog__content-link' to={`/product/${item.id}`}>
                                            <img className='catalog__content-img' src={img} alt=""/>
                                        </Link>
                                        <button className='catalog__content-fav'><MdOutlineFavoriteBorder/></button>
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