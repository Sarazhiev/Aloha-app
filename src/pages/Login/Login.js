import React from 'react';
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div>
            <div className='register'>
                <div className="container">
                    <div className='register__content'>
                        <h2 className='register__title'>Авторизация</h2>
                        <input className='register__input' placeholder='Ваш e-mail*' type="email"/>
                        <input className='register__input' placeholder='Ваш пароль*' type="text"/>
                        <p className='register__question'>Нет аккаунта? <Link className='register__login' to='/register'>Регистрация</Link></p>
                        <button className='register__btn'>Войти</button>
                        <Link className='register__home' to='/'>Выйти на главную</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;