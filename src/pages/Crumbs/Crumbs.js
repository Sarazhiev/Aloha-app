import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Crumbs = ({title}) => {
    return (
        <div className="catalog__crumbs">
            <Link className="catalog__link" to='/'>Главная</Link>
            >
            <Link className="catalog__link" to='/catalog/all'>Каталог</Link>
            >
            <span className="catalog__link">{title}</span>
        </div>
    );
};

export default Crumbs;