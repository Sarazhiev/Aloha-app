import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";

const Burger = ({burger, setBurger}) => {
    const location = useLocation();

    useEffect(() => {
        setBurger(false)
    },[location.pathname]);
    return (
        <>
            <div className={`burger ${burger ? 'burger_active' : ''}`} onClick={() => setBurger(!burger)}>
                    <span className='burger__line'>
                    </span>
            </div>
            <div onClick={() => setBurger(false)} className={`overlay ${burger ? 'overlay_active' : ''}`}>

            </div>
        </>
    );
};

export default Burger;