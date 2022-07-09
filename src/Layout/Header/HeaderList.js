import React,{useState} from 'react';
import {NavLink ,Link} from "react-router-dom";
import {changeStatus} from "../../redux/reducers/clothes";
import {useDispatch} from "react-redux";


const HeaderList = ({burger, user}) => {
    const [isActive, setIsActive] = useState(null);
    const [isActive2, setIsActive2] = useState(null);
    const dispatch = useDispatch();
    return (
        <ul  className={`header__list ${burger ? 'header__list_active' : ''}`}>
            <NavLink to='catalog/all' className='header__nav-items'>ПОСМОТРЕТЬ ВСЕ</NavLink>
            <li className='header__nav-items'>БЕСТСЕЛЛЕРЫ</li>
            <li className='header__nav-items'>
                <NavLink className='header__nav-items' to={`/catalog/new`}>НОВИНКИ</NavLink></li>
            <li className='header__nav-items' >Мужчинам <button className='header__nav-arrow' onClick={() => setIsActive(!isActive)}>
                {
                    isActive ? <svg width="16" height="10" viewBox="0 0 16 10" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16 8.64986C16 8.45805 15.9289 8.26605 15.7869 8.11962L8.5142 0.619697C8.23002 0.326638 7.76984 0.326638 7.48584 0.619697L0.213135 8.11962C-0.0710456 8.41268 -0.0710456 8.88724 0.213135 9.18011C0.497316 9.47298 0.957497 9.47317 1.2415 9.18011L8.00002 2.21043L14.7585 9.18011C15.0427 9.47317 15.5029 9.47317 15.7869 9.18011C15.9289 9.03367 16 8.84167 16 8.64986Z"
                                fill="#FF7010"/>
                        </svg>
                        :
                        <svg width="16" height="10" viewBox="0 0 16 10" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16 1.35014C16 1.54195 15.9289 1.73395 15.7869 1.88038L8.5142 9.3803C8.23002 9.67336 7.76984 9.67336 7.48584 9.3803L0.213135 1.88038C-0.0710456 1.58732 -0.0710456 1.11276 0.213135 0.819893C0.497316 0.527021 0.957497 0.526833 1.2415 0.819893L8.00002 7.78957L14.7585 0.819892C15.0427 0.526833 15.5029 0.526833 15.7869 0.819892C15.9289 0.966328 16 1.15833 16 1.35014Z"
                                fill="#FF7010"/>
                        </svg>
                }
            </button>
                {
                    isActive && <ul className='header__nav-lists'>
                        <li className='header__nav-itm'><Link className='header__nav-itm' to='catalog/all' onClick={() => dispatch(changeStatus('man'))}>Посмотреть все</Link></li>
                        <li className='header__nav-itm'><Link className='header__nav-itm' to='catalog/hoody' onClick={() => dispatch(changeStatus('man'))}>Худи</Link></li>
                        <li className='header__nav-itm'><Link className='header__nav-itm' to='catalog/sweatshirt' onClick={() => dispatch(changeStatus('man'))}>Свитшоты</Link></li>
                        <li className='header__nav-itm'><Link className='header__nav-itm' to='catalog/tshort' onClick={() => dispatch(changeStatus('man'))}>Футболки</Link></li>
                        <li className='header__nav-itm'><Link className='header__nav-itm' to='catalog/pants' onClick={() => dispatch(changeStatus('man'))}>Штаны</Link></li>
                        <li className='header__nav-itm'><Link className='header__nav-itm' to='catalog/shorts' onClick={() => dispatch(changeStatus('man'))}>Шорты</Link></li>
                        <li className='header__nav-itm'><Link className='header__nav-itm' to='catalog/jacket' onClick={() => dispatch(changeStatus('man'))}>Куртки</Link></li>
                        <li className='header__nav-itm'><Link className='header__nav-itm' to='catalog/waistcoat' onClick={() => dispatch(changeStatus('man'))}>Жилеты</Link></li>
                        <li className='header__nav-itm'><Link className='header__nav-itm' to='catalog/sneakers' onClick={() => dispatch(changeStatus('man'))}>Кроссовки</Link></li>
                    </ul>
                }
            </li>
            <li className='header__nav-items'>Женщинам <button className='header__nav-arrow' onClick={() => setIsActive2(!isActive2)}>
                {
                    isActive2 ? <svg width="16" height="10" viewBox="0 0 16 10" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16 8.64986C16 8.45805 15.9289 8.26605 15.7869 8.11962L8.5142 0.619697C8.23002 0.326638 7.76984 0.326638 7.48584 0.619697L0.213135 8.11962C-0.0710456 8.41268 -0.0710456 8.88724 0.213135 9.18011C0.497316 9.47298 0.957497 9.47317 1.2415 9.18011L8.00002 2.21043L14.7585 9.18011C15.0427 9.47317 15.5029 9.47317 15.7869 9.18011C15.9289 9.03367 16 8.84167 16 8.64986Z"
                                fill="#FF7010"/>
                        </svg>
                        :
                        <svg width="16" height="10" viewBox="0 0 16 10" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16 1.35014C16 1.54195 15.9289 1.73395 15.7869 1.88038L8.5142 9.3803C8.23002 9.67336 7.76984 9.67336 7.48584 9.3803L0.213135 1.88038C-0.0710456 1.58732 -0.0710456 1.11276 0.213135 0.819893C0.497316 0.527021 0.957497 0.526833 1.2415 0.819893L8.00002 7.78957L14.7585 0.819892C15.0427 0.526833 15.5029 0.526833 15.7869 0.819892C15.9289 0.966328 16 1.15833 16 1.35014Z"
                                fill="#FF7010"/>
                        </svg>
                }
            </button>

                {
                    isActive2 && <ul className='header__nav-lists'>
                        <li className='header__nav-itm'><Link className='header__nav-itm' to='catalog/all' onClick={() =>   dispatch(changeStatus('woman'))}>Посмотреть все</Link></li>
                        <li className='header__nav-itm'><Link className='header__nav-itm' to='catalog/hoody' onClick={() => dispatch(changeStatus('woman'))}>Худи</Link></li>
                        <li className='header__nav-itm'><Link className='header__nav-itm' to='catalog/sweatshirt' onClick={() => dispatch(changeStatus('woman'))}>Свитшоты</Link></li>
                        <li className='header__nav-itm'><Link className='header__nav-itm' to='catalog/tshort' onClick={() => dispatch(changeStatus('woman'))}>Футболки</Link></li>
                        <li className='header__nav-itm'><Link className='header__nav-itm' to='catalog/pants' onClick={() => dispatch(changeStatus('woman'))}>Штаны</Link></li>
                        <li className='header__nav-itm'><Link className='header__nav-itm' to='catalog/shorts' onClick={() => dispatch(changeStatus('woman'))}>Шорты</Link></li>
                        <li className='header__nav-itm'><Link className='header__nav-itm' to='catalog/jacket' onClick={() => dispatch(changeStatus('woman'))}>Куртки</Link></li>
                        <li className='header__nav-itm'><Link className='header__nav-itm' to='catalog/waistcoat' onClick={() => dispatch(changeStatus('woman'))}>Жилеты</Link></li>
                        <li className='header__nav-itm'><Link className='header__nav-itm' to='catalog/sneakers' onClick={() => dispatch(changeStatus('woman'))}>Кроссовки</Link></li>
                    </ul>
                }
            </li>
            <li className='header__nav-items'>Корпоративные заказы и оптом</li>
            <li className='header__nav-items'><NavLink className='header__nav-items' to='/contact'>Контакты</NavLink></li>
            {user.email === 'admin@mail.ru' &&  <li className='header__nav-items'><NavLink className='header__nav-items' to='/admin/users'>Админ панель</NavLink></li> }
        </ul>
    );
};

export default HeaderList;