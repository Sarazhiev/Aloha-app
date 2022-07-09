import React from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom";
import {logOutUser} from "../../redux/reducers/user";
import {FiSearch} from 'react-icons/fi'
import {BiUser} from 'react-icons/bi'
import {RiShoppingCart2Line} from 'react-icons/ri'
import {MdOutlineFavoriteBorder} from 'react-icons/md'
import {useDispatch, useSelector} from "react-redux";

const HeaderRight = ({user}) => {
    const dispatch = useDispatch();
    const basket = useSelector(s =>s.basket.basket);
    const navigate = useNavigate();

    return (
        <div className='header__nav-right'>
            <ul className='header__nav-list'>
                <label style={{fontSize: '25px', cursor: 'pointer'}} htmlFor="search" onClick={() => navigate('/catalog/all')}>
                    <FiSearch/>
                </label>
                {
                    user.email?.length || user.phoneNumber?.length ?
                        <span style={{display: 'flex', columnGap: '10px'}}>
                                <NavLink to='/profile' className='header__nav-item header__nav-item2 header__nav-item3'><BiUser/><span className='header__nav-name'>{user.email || user.phoneNumber}</span></NavLink>
                                     <Link to='/login' className='header__nav-item2' onClick={() => {
                                         localStorage.removeItem('user');
                                         dispatch(logOutUser())
                                     }}>  / Выйти</Link>
                                       </span>
                        : <Link to='/login' className='header__nav-item2'>войти</Link>
                }
                {
                    user.email?.length || user.phoneNumber?.length ?
                        <NavLink to='/favorites' className='header__nav-item'><MdOutlineFavoriteBorder/>{user.favorites && user.favorites.length ? user.favorites.length : ''}</NavLink>
                        : ''
                }
                <NavLink to='/basket' className='header__nav-item'><span><RiShoppingCart2Line/>{basket.length ? basket.length : ' '}</span></NavLink>
            </ul>
        </div>
    );
};

export default HeaderRight;