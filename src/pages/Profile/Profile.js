import React, {useState} from 'react';
import History from "./History/History";
import {Link, NavLink} from "react-router-dom";

const Profile = () => {

    return (
        <div className='profile'>
            <div className="container">
                <div className="catalog__crumbs">
                    <Link className="catalog__link" to='/'>Главная</Link>
                    >
                    <NavLink to='/profile' className="catalog__link">Личные кабинет</NavLink>
                </div>
            </div>
            <History/>
        </div>
    );
};

export default Profile;