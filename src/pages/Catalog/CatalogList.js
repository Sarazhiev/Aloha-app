import React from 'react';
import {NavLink} from "react-router-dom";
import {animateScroll} from "react-scroll";

const CatalogList = ({clothes}) => {
    return (
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
    );
};

export default CatalogList;