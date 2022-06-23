import React, {useState} from 'react';
import History from "./History/History";
import {Link, NavLink} from "react-router-dom";
import Crumbs from "../Crumbs/Crumbs";

const Profile = () => {

    return (
        <div className='profile'>
            <div className="container">
                <Crumbs title='Личный кабинет'/>
            </div>
            <History/>
        </div>
    );
};

export default Profile;