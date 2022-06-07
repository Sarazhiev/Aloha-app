import React, {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import img from "../Rectangle 10 (5).png";
import Profile from "../Profile";
import PersonalData from "../PersonalData/PersonalData";

const History = () => {
    const [tab, setTab] = useState(2);
    const [isActive, setIsActive] = useState(null);
    return (
        <div className='history'>
            <div className="container">

                <div className='history__btns'>
                    <button onClick={() => setTab(1)}
                            className={`history__btn ${tab === 1 && 'history__btn-active'}`}>История заказов
                    </button>
                    <button onClick={() => setTab(2)}
                            className={`history__btn ${tab === 2 && 'history__btn-active'}`}>Личные данные
                    </button>
                </div>

                {
                    tab === 1
                        ?
                        <div className='history__order'>
                            <ul className='history__list'>
                                <li className='history__item'>№ 718 от 28.09.21</li>
                                <li className='history__item'>Статус: <span>Отменён</span></li>
                                <li className='history__item'>Сумма заказа: <span>13682 грн</span></li>
                                <li className='history__orders-arrow' onClick={() => setIsActive(!isActive)}>
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
                                </li>
                            </ul>
                            {
                                isActive &&
                                <>
                                    <ul className='history__list'>
                                        <li className='history__item'><img src={img} alt=""/></li>
                                        <li className='history__item'>Кремовое пальто</li>
                                        <li className='history__item history__item-color'> </li>
                                        <li className='history__item'>Размер: <span>L</span></li>
                                        <li className='history__item'>Количество: <span>3</span></li>
                                        <li className='history__item history__item-price'>9450 грн</li>
                                    </ul>
                                    <div className='history__info'>
                                        <div>
                                            <p className='history__about'>Имя Фамилия: <span className='profile__abouts'>Елизаветта Станиславчук</span></p>
                                            <p className='history__about'>E-mail: <span className='profile__abouts'>ella.s97@gmail.com</span></p>
                                            <p className='history__about'>Номер телефона: <span className='profile__abouts'>+38(067)470 20 66</span></p>
                                        </div>
                                        <div>
                                            <p className='history__about'>Способ доставки: <span className='profile__abouts'>Доставка Новой Почтой</span></p>
                                            <p className='history__about'>Способ оплаты: <span className='profile__abouts'>Оплата при получении</span></p>
                                        </div>
                                    </div>
                                </>
                            }
                        </div>
                        :
                        <PersonalData/>
                }


            </div>
        </div>
    );
};

export default History;