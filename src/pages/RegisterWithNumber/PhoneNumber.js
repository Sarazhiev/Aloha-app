import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import {auth} from "../../firebase/firebase";
import {useDispatch} from "react-redux";
import {registerUser} from "../../redux/reducers/user";

const PhoneNumber = () => {
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const createOrLoginForNumber = () => {
        if (phone.length >= 12) {
            signInWithPhoneNumber(auth, phone,window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
                'callback': (response) => {
                }
            }, auth))
                .then((confirmationResult) => {
                    window.confirmationResult = confirmationResult;
                }).catch((error) => {
                console.log(error)
            });

        }
    };

    const confirmLoginFromNumbers = (e) => {

        let code = e.target.value ;
        setOtp(code);
        if (code.length === 6) {
            let confirmationResult = window.confirmationResult;
            confirmationResult.confirm(code).then((result) => {
                // User signed in successfully.
                const user = result.user;
                dispatch(registerUser({obj: user}));
                localStorage.setItem('user', JSON.stringify(user));
                navigate('/')
            }).catch((error) => console.log(error));
        }
    };


    return (
        <div className='number'>
            <h2 className='number__title'>Введите ваш номер телефона и мы вышлем <br/>
                вам код  подтверждения для регистрации !</h2>
            <input  value={phone} onChange={(e) => setPhone(e.target.value)} className='number__input' placeholder='+ 7 (123)-456-78-90' type="tel"/>
            <button type='button' className='number__btn' onClick={() => {
                createOrLoginForNumber();
            }}>Продолжить</button>

            <div>
                <input value={otp} onChange={confirmLoginFromNumbers} className='number__input' type="number"/>
            </div>
            <div style={{display: "flex", justifyContent: "center"}} id='sign-in-button'/>

            <Link className='register__home' to='/'>Выйти на главную</Link>

        </div>
    );
};

export default PhoneNumber;