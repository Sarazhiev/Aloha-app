import React, {useRef} from 'react';
import {NavLink, Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import InputMask from 'react-input-mask';
import axios from "axios";
import {useDispatch} from "react-redux";
import {registerUser} from "../../redux/reducers/user";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {auth, db} from "../../firebase/firebase";
import {addDoc, collection} from "@firebase/firestore";


const Register = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {
        register,
        reset,
        handleSubmit,
        formState: {
            errors
        },
        watch,
    } = useForm({
        mode: 'onBlur'
    });

    // const registerUsers = (data) => {
    //     axios.post('https://alohadatabase.herokuapp.com/register', {
    //         ...data,
    //         orders : [],
    //         favorites : []
    //     })
    //         .then((res) => {
    //             localStorage.setItem('user', JSON.stringify(res.data.user));
    //             dispatch(registerUser({obj: res.data.user}));
    //             navigate('/')
    //         }).catch(() => alert('ошибка при регистрации'))
    // };


    const createUser = (data) => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then(async (userCredential) => {
                const user = userCredential.user;
                await addDoc(collection(db, 'users'), {
                    ...user,
                    orders: [],
                    phone: '',
                    gitl: [],
                    login: ''
                });
                await dispatch(registerUser({obj: user}));
                await localStorage.setItem('user', JSON.stringify(user));
                await reset();
                await navigate('/')
            })
            .catch((error) => console.log(`bad request ${error}`));
    };


    const password = useRef({});
    password.current = watch("password", "");

    return (
        <div className='register'>
            <div className="container">
                <form className='register__content' onSubmit={handleSubmit(createUser)}>
                    <h2 className='register__title'>Регистрация</h2>
                    <input id='1' {...register('email', {
                        required: 'Это поле обязательное *',
                    })} className='register__input' type="email" placeholder='Введите email'/>
                    <span>{errors?.email?.message}</span>
                    <input id='2' {...register('login', {
                        required: 'Это поле обязательное *'
                    })} className='register__input' type="text" placeholder='Введите логин'/>
                    <span>{errors?.login?.message}</span>
                    <InputMask mask={`+\\9\\96(999)99-99-99`} type='tel' id='tel' {...register('phone', {
                        required: 'Это поле обязательное *'
                    })} className="register__input" placeholder='Введите номер телефона'/>
                    <span>{errors?.phone?.message}</span>
                    <input id='4' {...register('password', {
                        required: "You must specify Procfile.js password",
                        minLength: {
                            value: 5,
                            message: "Password must have at least 5 characters"
                        }
                    })} className="register__input" type='password' placeholder='Введите пароль'/>
                    <span>{errors?.password?.message}</span>
                    <input id='5' className="register__input" type='password'
                           placeholder='Введите пароль повторно' {...register('confirmPwd', {
                        validate: value =>
                            value === password.current || "The password do not match"
                    })}/>
                    {errors?.confirmPwd && <p>{errors?.confirmPwd?.message}</p>}
                    <p className='register__question'>уже есть аккаунт? <Link className='register__login'
                                                                              to='/login'>Войти</Link></p>
                    <button type='submit' className='register__btn'>ЗАРЕГИСТРИРОВАТЬСЯ</button>
                    <Link className='register__home' to='/'>Выйти на главную</Link>
                </form>
            </div>
        </div>
    );
};

export default Register;