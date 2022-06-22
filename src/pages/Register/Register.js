import React, {useRef} from 'react';
import {NavLink, Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import InputMask from 'react-input-mask';
import {useDispatch} from "react-redux";
import {registerUser} from "../../redux/reducers/user";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth, db} from "../../firebase/firebase";
import {addDoc, collection} from "@firebase/firestore";
import Google from "../LoginWithGoogle/Google";
import {FcCellPhone} from 'react-icons/fc'
import axios from "../../axios";


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


    const createUser = ({confirmPwd, ...obj}) => {
        axios.post('auth/register', obj).then( async ({data}) => {
           await dispatch(registerUser({obj: data}))
           await localStorage.setItem('user', JSON.stringify(data))
           await reset();
           await navigate('/')
        })  .catch((error) => console.log(`bad request ${error}`));
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
                        pattern: {
                            value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g,
                            message: 'Пароль должен содержать не менее 8 символов, заглавную букву, число!'
                        }
                    })} className="register__input" type='password' placeholder='Введите пароль'/>
                    <span>{errors?.password?.message}</span>
                    <input id='5' className="register__input" type='password'
                           placeholder='Введите пароль повторно' {...register('confirmPwd', {
                        validate: value =>
                            value === password.current || "The password do not match"
                    })}/>
                    {errors?.confirmPwd && <p>{errors?.confirmPwd?.message}</p>}
                    <p className='register__question'><Link className='register__login'
                                                            to='/login'>уже есть аккаунт? Войти</Link></p>
                    <button type='submit' className='register__btn'>ЗАРЕГИСТРИРОВАТЬСЯ</button>
                    <h2 style={{marginTop: '20px'}} className='register__title'>Войдите через Google или телефон</h2>
                    <div style={{display: "flex", alignItems: "center", columnGap: '10px', cursor: 'pointer'}}>
                        <Google/>
                        <p><Link to='/number' style={{fontSize: '30px'}}><FcCellPhone/></Link></p>

                    </div>
                    <Link className='register__home' to='/'>Выйти на главную</Link>
                </form>
            </div>
        </div>
    );
};

export default Register;