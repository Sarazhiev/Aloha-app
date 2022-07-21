import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from "../../axios";
import {registerUser} from "../../redux/reducers/user";



const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {
        register,
        reset,
        handleSubmit,
        formState: {
            errors
        },
    } = useForm({
        mode: 'onBlur'
    });



    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    const addUser = (data) => {
        axios.post('/auth/login', data).then( async (res) => {
            await dispatch(registerUser({obj: res.data}));
            await localStorage.setItem('user', JSON.stringify(res.data));
            await reset();
            await navigate('/')
        })
    };

    return (
        <div>
            <div className='register'>
                <div className="container">
                    <form className='register__content' autoComplete="new-password" onSubmit={handleSubmit(addUser)}>
                        <h2 className='register__title'>Авторизация</h2>
                        <label htmlFor="1">Email</label>
                        <input autoComplete="new-password"  id='1' {...register('email', {
                            required: 'Это поле обязательное *',
                        })} className='register__input' type="email" placeholder='Введите email'/>
                        <span>{errors?.email?.message}</span>
                        {/*<input id='4' {...register('password', {*/}
                        {/*    required: "You must specify Procfile.js password",*/}
                        {/*    minLength: {*/}
                        {/*        value: 5,*/}
                        {/*        message: "Password must have at least 5 characters"*/}
                        {/*    }*/}
                        {/*})} className="register__input" type='password' placeholder='Введите пароль'/>*/}
                        {/*<span>{errors?.password?.message}</span>*/}

                        <InputLabel  htmlFor="filled-adornment-password">Password</InputLabel>
                        <FilledInput
                            autoComplete="new-password"
                            style={{background: 'transparent', padding: '0 15px 15px', borderTopLeftRadius: '0', borderTopRightRadius: '0'}}
                            className="register__input"
                            {...register('password', {
                                required: "You must specify Procfile.js password",
                                minLength: {
                                    value: 5,
                                    message: "Password must have at least 5 characters"
                                }
                            })}
                              placeholder='Введите пароль'
                            id="filled-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end"style={{paddingTop: '15px'}} >
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        <span>{errors?.password?.message}</span>
                        <p className='register__question'> <Link className='register__login' to='/register'>Нет аккаунта? Регистрация</Link></p>
                        <button type='submit' className='register__btn'>Войти</button>
                        <Link className='register__home' to='/'>Выйти на главную</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;