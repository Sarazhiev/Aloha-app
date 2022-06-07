import React from 'react';
import {NavLink, Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import axios from "axios";
import {useDispatch} from "react-redux";
import {registerUser} from "../../redux/reducers/user";


const Register = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const {
        register,
        reset,
        handleSubmit
    } = useForm()

    const registerUsers = (data) => {
        axios.post('https://alohadatabase.herokuapp.com/register', {
            ...data,
            orders : [],
            favorites : []
        })
            .then((res) => {
                localStorage.setItem('user', JSON.stringify(res.data.user));
                dispatch(registerUser({obj: res.data.user}))
                navigate('/')
            }).catch(() => alert('ошибка при регистрации'))
    }



    return (
        <div className='register'>
            <button type='button' onClick={() => {
                axios.post('https://alohadatabase.herokuapp.com/clothes', {
                    "title": "Футболка Киллуа",
                    "price": 500,
                    "image": {
                        "white": "Shop/tshort5.jpg",
                        "beige": "Shop/tshort5-beige.jpg",
                        "blue": "Shop/tshort5-blue.jpg",
                        "brown": "Shop/tshort5-brown.jpg",
                        "grey": "Shop/tshort5-grey.jpg",
                        "orange": "Shop/tshort5-orange.jpg",
                        "pink": "Shop/tshort5-pink.jpg",
                        "red": "Shop/tshort5-red.jpg",
                        "black": "Shop/tshort5.jpg"
                    },
                    "category": "tshort",
                    "size": [
                        "s",
                        "m",
                        "xl"
                    ],
                    "colors": [
                        "pink",
                        "black",
                        "brown",
                        "beige",
                        "red",
                        "orange",
                        "white",
                        "blue",
                        "grey"
                    ],
                    "inStock": 14
                }).then(() =>console.log('удачно !') )
            }}>click me</button>
            <div className="container">
                <form className='register__content' onSubmit={handleSubmit(registerUsers)}>
                    <h2 className='register__title' >Регистрация</h2>
                    <input {...register("email")} className='register__input' placeholder='Ваш e-mail*' type="email"/>
                    <input  {...register("name")} className='register__input' placeholder='Ваше имя*' type="text"/>
                    <input   {...register("phone")} className='register__input' placeholder='Ваш номер телефона*' type="text"/>
                    <input  {...register("password")} className='register__input' placeholder='Ваш пароль*' type="text"/>

                    <input className='register__input' placeholder='Подтвердите пароль*' type="text"/>
                    <p className='register__question'>уже есть аккаунт? <Link className='register__login' to='/login'>Войти</Link></p>
                    <button type='submit' className='register__btn'>ЗАРЕГИСТРИРОВАТЬСЯ</button>
                    <Link className='register__home' to='/'>Выйти на главную</Link>
                </form>
            </div>
        </div>
    );
};

export default Register;