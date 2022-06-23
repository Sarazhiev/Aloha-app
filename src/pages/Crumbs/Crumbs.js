import React from 'react';
import {Link} from "react-router-dom";

const Crumbs = ({title}) => {
    return (
        <div className="catalog__crumbs">
            <Link className="catalog__link" to='/'>Главная</Link>
            >
            <span className="catalog__link">{title}</span>
        </div>
    );
};
export default Crumbs;