import React from 'react';
import {db, provider} from "../../firebase/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {FcGoogle} from 'react-icons/fc'
import {auth} from "../../firebase/firebase";
import {useNavigate} from "react-router-dom";
import {registerUser} from "../../redux/reducers/user";
import {useDispatch} from "react-redux";
import {addDoc, collection} from "@firebase/firestore";


const Google = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const createOrLoginUser = () => {
        signInWithPopup(auth, provider)
            .then(async (result) => {
                const user = result.user;
                await addDoc(collection(db, 'users'), {email: user.email, phone: '', orders: [], favorites: [], login: user.displayName, id : user.uid})
                await dispatch(registerUser({obj: {email: user.email, phone: '', orders: [], favorites: [], login: user.displayName, id : user.uid}}));
                await localStorage.setItem('user', JSON.stringify({email: user.email, phone: '', orders: [], favorites: [], login: user.displayName, id : user.uid}));
                await navigate('/')
            }).catch((error) => console.log(error));
    };

    return (
        <p onClick={createOrLoginUser} style={{fontSize: '25px', display: 'flex'}}><FcGoogle/></p>
    );
};

export default Google;