import React from 'react';
import {db, provider} from "../../firebase/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {FcGoogle} from 'react-icons/fc'
import {auth} from "../../firebase/firebase";
import {useNavigate} from "react-router-dom";
import {registerUser} from "../../redux/reducers/user";
import {useDispatch} from "react-redux";
import {addDoc, collection, getDocs} from "@firebase/firestore";


const Google = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();



    const createOrLoginUser = () => {
        signInWithPopup(auth, provider)
            .then( (result) => {
                const user = result.user;

                 getDocs(collection(db,'users'))
                    .then( async (res) => {
                        const addUser = async () => {
                            await dispatch(registerUser({obj: res.docs.map(el => ({...el.data(), id:el.id}) ).find(item => item.email === user.email)}));
                            await localStorage.setItem('user', JSON.stringify(res.docs.map(el => ({...el.data(), id:el.id}) ).find(item => item.email === user.email)));
                            await navigate('/')
                        }
                        if (res.docs.map(el => ({...el.data(), id:el.id}) ).filter(item => item.email === user.email).length){
                            await addUser()
                        } else {
                            await addDoc(collection(db, 'users'), {carts: [],email: user.email, phone: '', orders: [], favorites: [], login: user.displayName, id : user.uid})
                            await addUser()
                        }
                    })
            }).catch((error) => console.log(error));
    };

    return (
        <p onClick={createOrLoginUser} style={{fontSize: '25px', display: 'flex'}}><FcGoogle/></p>
    );
};

export default Google;