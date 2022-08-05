import React from 'react';
import {MdOutlineFavoriteBorder} from "react-icons/md";
import {useDispatch, useSelector} from "react-redux";

import {registerUser} from "../../redux/reducers/user";
import axios from "../../axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BtnForFavorites = ({item, product}) => {
    const user = useSelector(s => s.user.user);
    const dispatch = useDispatch();
    const addFavoritesForUser =  (obj) => {
        axios.patch(`/users/favorites/${user._id}` , {favorites: obj.favorites})
            .then((res) =>{
                dispatch(registerUser({obj: res.data}));
                localStorage.setItem('user', JSON.stringify(res.data));
                if (obj.status === 'del'){
                    toast("Удалено из Избранных!")
                } else {
                    toast("Добавлено в Избранное!")
                }

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
                            favorites:  user.favorites.findIndex(el => el._id === item._id) >= 0 ? user.favorites.filter((el) => el.id !== item.id) : [...user.favorites, item],
                            status: user.favorites.findIndex(el => el._id === item._id) >= 0 ? 'del' : 'add'
                        })

                    }}>{user.favorites.findIndex(el => el._id === item._id ) >= 0 ? 'Добавлено в Избранное' : 'Добавить в избранное'} </button>

                    :
                    <button className='catalog__content-fav' style={{color: user.favorites.findIndex(el => el._id === item._id ) >= 0 ? "tomato" : ''}} onClick={ () =>{
                        addFavoritesForUser( {
                            favorites:  user.favorites.findIndex(el => el._id === item._id) >= 0 ? user.favorites.filter((el) => el._id !== item._id) : [...user.favorites, item],
                            status: user.favorites.findIndex(el => el._id === item._id) >= 0 ? 'del' : 'add'
                        })

                    }}><MdOutlineFavoriteBorder/></button>
            }
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
};

export default BtnForFavorites;