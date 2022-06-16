import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {registerUser} from "../../redux/reducers/user";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {auth, db} from "../../firebase/firebase";
import Google from "../LoginWithGoogle/Google";
import {FcCellPhone} from 'react-icons/fc'
import {collection, doc, getDocs, updateDoc} from "@firebase/firestore";
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';



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

    // const addUser = (data) => {
    //     axios.post('https://alohadatabase.herokuapp.com/login', data)
    //         .then((res) => {
    //             localStorage.setItem('access', JSON.stringify(res.data.accessToken));
    //             localStorage.setItem('user', JSON.stringify(res.data.user));
    //             dispatch(registerUser(res.data.user))
    //             navigate('/')
    //         })
    // }


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
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then(async (userCredential) => {
                // Signed in
                const user = userCredential.user;
                await getDocs(collection(db,'users'))
                    .then(async (res) => {
                        await dispatch(registerUser({obj: res.docs.map(el => ({...el.data(), id:el.id}) ).find(item => item.email === user.email)}));
                        await localStorage.setItem('user', JSON.stringify(res.docs.map(el => ({...el.data(), id:el.id}) ).find(item => item.email === user.email)));
                        await reset();
                        await navigate('/')
                    })
            })
            .catch((error) => console.log(`bad request ${error}`));
    };

    return (
        <div>
            <div className='register'>
                <div className="container">
                    <form className='register__content' onSubmit={handleSubmit(addUser)}>
                        <h2 className='register__title'>Авторизация</h2>
                        <label htmlFor="1">Email</label>
                        <input id='1' {...register('email', {
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

                        <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                        <FilledInput
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
                        <h2 style={{marginTop: '20px'}} className='register__title'>Войдите через Google</h2>
                        <div style={{display:"flex", alignItems:"center", columnGap: '10px', cursor: 'pointer'}}>
                            <Google/>
                            <p><Link to='/number' style={{fontSize: '30px'}}><FcCellPhone/></Link></p>
                        </div>
                        <Link className='register__home' to='/'>Выйти на главную</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;