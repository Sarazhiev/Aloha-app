import React from 'react';
import {NavLink, useLocation} from "react-router-dom";
import Clothes from "./Clothes";
import {Routes, Route, Navigate} from 'react-router-dom'
import Users from "./Users";
import ClothesAdd from "./ClothesAdd";
import {AiOutlineUser} from 'react-icons/ai'
import {GiClothes} from 'react-icons/gi'

const AdminPanel = () => {
    const location = useLocation();


    return (
        <section className='admin'>
            {location.pathname === '/admin' && <Navigate to='/admin/users'/>}
            <aside className='admin__aside'>
                <ul>
                    <li className='admin__title'>
                        <NavLink className='admin__title2' to='users'><AiOutlineUser/> Users</NavLink>

                    </li>
                    <li className='admin__title'>
                        <NavLink className='admin__title2' to='clothes'><GiClothes/> Clothes</NavLink>
                    </li>
                </ul>
            </aside>
            <div className='admin__content'>
                <Routes>
                    <Route path='clothes' element={<Clothes/>}/>
                    <Route path='users' element={<Users/>}/>
                    <Route path='clothes/add' element={<ClothesAdd/>}/>
                </Routes>
            </div>
        </section>
    );
};

export default AdminPanel;