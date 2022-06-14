import React from 'react';
import {MdOutlineFavoriteBorder} from "react-icons/md";
import {useDispatch, useSelector} from "react-redux";
import {collection, doc, getDocs, updateDoc} from "@firebase/firestore";
import {db} from "../../firebase/firebase";
import {registerUser} from "../../redux/reducers/user";
import {useLocation} from "react-router-dom";

const BtnForFavorites = ({item}) => {
    const user = useSelector(s => s.user.user);
    const dispatch = useDispatch();
    const location = useLocation();
    const addFavoritesForUser =  (obj) => {
        getDocs(collection(db,'users'))
            .then(async (res) => {
                await dispatch(registerUser({obj: obj}));
                await localStorage.setItem('user', JSON.stringify(obj));
                await updateDoc(doc(db, 'users', res.docs.map(el => ({...el.data(), id:el.id}) ).find(item => item.email === user.email).id), obj)
            })

    };
    return (
        <>
            {
                location.pathname.includes('product')
                    ?
                    <button className='product__btn2' style={{background: user.favorites.findIndex(el => el.id === item.id ) >= 0 ? "tomato" : '', color: user.favorites.findIndex(el => el.id === item.id ) >= 0 ? "white" : ''}} onClick={ () =>{
                        addFavoritesForUser( {
                            ...user,
                            favorites:  user.favorites.findIndex(el => el.id === item.id) >= 0 ? user.favorites.filter((el) => el.id !== item.id) : [...user.favorites, item]
                        })}}>Добавить в избранное</button>
                    :
                    <button className='catalog__content-fav' style={{color: user.favorites.findIndex(el => el.id === item.id ) >= 0 ? "tomato" : ''}} onClick={ () =>{
                        addFavoritesForUser( {
                            ...user,
                            favorites:  user.favorites.findIndex(el => el.id === item.id) >= 0 ? user.favorites.filter((el) => el.id !== item.id) : [...user.favorites, item]
                        })}}><MdOutlineFavoriteBorder/></button>
            }

        </>
    );
};

export default BtnForFavorites;