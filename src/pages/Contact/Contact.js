import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {BsWhatsapp, BsInstagram, BsTelegram} from 'react-icons/bs'
import First from "../Home/First/First";
import Map from "./Map/Map";

const Contact = () => {
    return (
        <section className='contact'>
            <div className="container">
                <div className="catalog__crumbs">
                    <Link className="catalog__link" to='/'>Главная</Link>
                    >
                    <NavLink to='/coat' className="catalog__link">Контакты</NavLink>
                </div>
                <h2 className='contact__title'>Связаться с нами</h2>
                <div className='contact__lists'>
                    <ul className='contact__list'>
                        <li className='contact__item1'>В социальных сетях</li>
                        <div className='contact__icon'>
                            <li className='contact__item2'><BsTelegram/></li>
                            <li className='contact__item2'><BsInstagram/></li>
                            <li className='contact__item2'><BsWhatsapp/></li></div>
                    </ul>
                    <ul className='contact__list'>
                        <li className='contact__item1'>По телефону</li>
                        <li className='contact__item'>+38(067) 158 82 66</li>
                        <li className='contact__item'>+38(073) 226 39 81</li>
                    </ul>
                    <ul className='contact__list'>
                        <li className='contact__item1'>По почте</li>
                        <li className='contact__item'>example@gmail.com</li>
                    </ul>
                    <ul className='contact__list'>
                        <li className='contact__item1'>Наш офис</li>
                        <li className='contact__item'>г. Киев, улица Батумская, 18</li>
                    </ul>
                </div>
                <Map/>
                <First/>
            </div>
        </section>
    );
};

export default Contact;