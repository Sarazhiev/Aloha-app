import React from 'react';
import {NavLink, Link} from "react-router-dom";

const Register = () => {
    return (
        <div className='register'>
            <div className="container">
                <div className='register__content'>
                    <h2 className='register__title'>Регистрация</h2>
                    <input className='register__input' placeholder='Ваш e-mail*' type="email"/>
                    <input className='register__input' placeholder='Ваш пароль*' type="text"/>
                    <input className='register__input' placeholder='Подтвердите пароль*' type="text"/>
                    <p className='register__question'>уже есть аккаунт? <Link className='register__login' to='/login'>Войти</Link></p>
                    <button className='register__btn'>ЗАРЕГИСТРИРОВАТЬСЯ</button>
                    <Link className='register__home' to='/'>Выйти на главную</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;