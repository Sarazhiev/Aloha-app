import React from 'react';
import {MdOutlineFavoriteBorder, MdDoneOutline} from "react-icons/md";
import {useDispatch, useSelector} from "react-redux";
import {collection, doc, getDocs, updateDoc} from "@firebase/firestore";
import {db} from "../../firebase/firebase";
import {registerUser} from "../../redux/reducers/user";
import axios from "../../axios";

const BtnForFavorites = ({item, product}) => {
    const user = useSelector(s => s.user.user);
    const dispatch = useDispatch();
    const addFavoritesForUser =  (obj) => {

        axios.patch(`/users/favorites/${user._id}` , obj)
            .then((res) =>{
                dispatch(registerUser({obj: res.data}));
                localStorage.setItem('user', JSON.stringify(res.data));
            })
            .catch((err) => console.log(err))

    };
    return (
        <>
            {
                product
                    ?
                    <button className='product__btn2' style={{background: user.favorites.findIndex(el => el._id === item._id ) >= 0 ? "tomato" : '', color: user.favorites.findIndex(el => el._id === item._id ) >= 0 ? "white" : '', border: user.favorites.findIndex(el => el._id === item._id ) >= 0 ? "none" : ''}} onClick={ () =>{
                        addFavoritesForUser( {
                            favorites:  user.favorites.findIndex(el => el._id === item._id) >= 0 ? user.favorites.filter((el) => el.id !== item.id) : [...user.favorites, item]
                        })}}>{user.favorites.findIndex(el => el._id === item._id ) >= 0 ? 'Добавлено в Избранное' : 'Добавить в избранное'} </button>
                    :
                    <button className='catalog__content-fav' style={{color: user.favorites.findIndex(el => el._id === item._id ) >= 0 ? "tomato" : ''}} onClick={ () =>{
                        addFavoritesForUser( {
                            favorites:  user.favorites.findIndex(el => el._id === item._id) >= 0 ? user.favorites.filter((el) => el._id !== item._id) : [...user.favorites, item]
                        })}}><MdOutlineFavoriteBorder/></button>
            }
        </>
    );
};

export default BtnForFavorites;