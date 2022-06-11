import React from 'react';
import {provider} from "../../firebase/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {FcGoogle} from 'react-icons/fc'
import {auth} from "../../firebase/firebase";
import {useNavigate} from "react-router-dom";
import {registerUser} from "../../redux/reducers/user";
import {useDispatch} from "react-redux";


const Google = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const createOrLoginUser = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                dispatch(registerUser({obj: user}));
                localStorage.setItem('user', JSON.stringify(user));
                navigate('/')
            }).catch((error) => console.log(error));
    };

    return (
        <p onClick={createOrLoginUser} style={{fontSize: '25px'}}><FcGoogle/></p>
    );
};

export default Google;