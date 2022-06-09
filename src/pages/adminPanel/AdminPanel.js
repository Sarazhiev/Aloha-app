import React from 'react';
import {NavLink, useLocation} from "react-router-dom";
import Clothes from "./Clothes";
import {Routes, Route, Navigate} from 'react-router-dom'
import Users from "./Users";
import ClothesAdd from "./ClothesAdd";

const AdminPanel = () => {
    const location = useLocation()

    console.log(location)

    return (
        <section className='admin'>
            {location.pathname === '/admin' && <Navigate to='/admin/users'/>}
            <aside className='admin__aside'>
                <ul>
                    <li>
                        <NavLink to='users'>Users</NavLink>

                    </li>
                    <li>
                        <NavLink to='clothes'>Clothes</NavLink>
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