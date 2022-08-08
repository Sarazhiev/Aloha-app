import React from 'react';
import {BsWhatsapp, BsInstagram, BsTelegram} from 'react-icons/bs'
import {SiTiktok} from 'react-icons/si'
import {FiPhoneCall} from 'react-icons/fi'
import {Link} from "react-router-dom";
import {animateScroll} from "react-scroll";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <nav className='footer__nav'>
                    <ul className='footer__list'>
                        <li className='footer__item'>Покупателям</li>
                        <li className='footer__item2'><Link className='footer__information' onClick={() => animateScroll.scrollToTop({
                            delay: 0,
                            duration: 0
                        })} to='/info'>Доставка</Link></li>
                        <li className='footer__item2'><Link className='footer__information' onClick={() => animateScroll.scrollToTop({
                            delay: 0,
                            duration: 0
                        })} to='/questions'>Вопросы и ответы</Link></li>
                        <li className='footer__item2'>Оптовым клиентам</li>
                        <li className='footer__item2'><Link className='footer__information' onClick={() => animateScroll.scrollToTop({
                            delay: 0,
                            duration: 0
                        })} to='/loyal'>Программа лояльности</Link></li>
                        <li className='footer__item2'><Link className='footer__information' onClick={() => animateScroll.scrollToTop({
                            delay: 0,
                            duration: 0
                        })} to='/care'>Ткани и уход</Link></li>
                    </ul>
                    <ul className='footer__list footer__list2'>
                        <li className='footer__item'>О компании</li>
                        <li className='footer__item2'>О нас</li>
                        <li className='footer__item2'>Контакты</li>
                        <li className='footer__item2'>Байтик баатыра 36/1, 2 этаж</li>
                    </ul>
                    <ul className='footer__list'>
                        <li className='footer__item'>Ссылки на:</li>
                        <li className='footer__item2'><a className='footer__social' href="#">WhatsApp<BsWhatsapp/></a></li>
                        <li className='footer__item2'><a className='footer__social' href="#">Instagram <BsInstagram/></a></li>
                        <li className='footer__item2'><a className='footer__social' href="#">Telegram <BsTelegram/></a></li>
                        <li className='footer__item2'><a className='footer__social' href="#"> Tiktok<SiTiktok/></a></li>
                        <li className='footer__item2'><a className='footer__social' href="#">Позвонить <FiPhoneCall/></a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;