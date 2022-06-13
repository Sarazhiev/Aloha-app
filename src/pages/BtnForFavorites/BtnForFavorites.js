import React from 'react';
import {MdOutlineFavoriteBorder} from "react-icons/md";
import {useDispatch, useSelector} from "react-redux";
import {collection, doc, getDocs, updateDoc} from "@firebase/firestore";
import {db} from "../../firebase/firebase";
import {registerUser} from "../../redux/reducers/user";

const BtnForFavorites = ({item}) => {
    const user = useSelector(s => s.user.user);
    const dispatch = useDispatch();

    const addFavoritesForUser =  (obj) => {
        getDocs(collection(db,'users'))
            .then(async (res) => {
                await dispatch(registerUser({obj: obj}));
                await localStorage.setItem('user', JSON.stringify(obj));
                await updateDoc(doc(db, 'users', res.docs.map(el => ({...el.data(), id:el.id}) ).find(item => item.email === user.email).id), obj)
            })

    };
    return (
        <button className='catalog__content-fav' style={{color: user.favorites.findIndex(el => el.id === item.id ) >= 0 ? "tomato" : ''}} onClick={ () =>{
            addFavoritesForUser( {
                ...user,
                favorites:  user.favorites.findIndex(el => el.id === item.id) >= 0 ? user.favorites.filter((el) => el.id !== item.id) : [...user.favorites, item]
            })}}><MdOutlineFavoriteBorder/></button>
    );
};

export default BtnForFavorites;