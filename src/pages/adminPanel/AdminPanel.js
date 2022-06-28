import React from 'react';
import {NavLink, useLocation} from "react-router-dom";
import Clothes from "./Clothes";
import {Routes, Route, Navigate} from 'react-router-dom'
import Users from "./Users";
import ClothesAdd from "./ClothesAdd";
import {AiOutlineUser} from 'react-icons/ai'
import {GiClothes} from 'react-icons/gi'
import {ToastContainer} from "react-toastify";

const AdminPanel = () => {
    const location = useLocation();


    return (
        <section className='admin'>
            {location.pathname === '/admin' && <Navigate to='/admin/users'/>}
            <aside className='admin__aside'>
                <ul>

                        <NavLink className='admin__title2' to='users'><li className='admin__title'> <AiOutlineUser/> Users </li></NavLink>

                        <NavLink className='admin__title2' to='clothes'><li className='admin__title'> <GiClothes/> Clothes  </li></NavLink>

                </ul>
            </aside>
            <div className='admin__content'>
                <Routes>
                    <Route path='clothes' element={<Clothes/>}/>
                    <Route path='users' element={<Users/>}/>
                    <Route path='clothes/add' element={<ClothesAdd/>}/>
                </Routes>
            </div>
            <ToastContainer
                position="bottom-left"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </section>
    );
};

export default AdminPanel;