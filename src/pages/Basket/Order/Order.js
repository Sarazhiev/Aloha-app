import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import axios from "../../../axios";
import {registerUser} from "../../../redux/reducers/user";
import {useNavigate} from "react-router-dom";
import {removeCart} from "../../../redux/reducers/basket";
import {toISOStringWithTimezone} from "../../../formatDate";
import {toast, ToastContainer} from "react-toastify";
import { v4 as uuidv4 } from 'uuid';
import Toastify from "../../../Components/Toastify/Toastify";


const Order = () => {

    const user = useSelector((s) => s.user.user)
    const basket = useSelector(s => s.basket.basket)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {
        register,
        reset,
        handleSubmit
    } = useForm()


    const handleOrders = (data) => {
        axios.patch(`users/${user._id}`, {
            ...data,
            time: toISOStringWithTimezone(new Date()),
            orders: basket,
            price: basket.reduce((acc, rec) => acc + rec.count * rec.price, 0),
            status: 'pending',
            number: uuidv4(),
            _id: user._id
        })
            .then(async (res) => {
                await navigate('/');

                await localStorage.setItem('user', JSON.stringify(res.data));
                await dispatch(registerUser({obj: res.data}));
                await dispatch(removeCart({arr: []}));
                await reset();
                await toast("Заказ успешно совершен!")
            });

    }

    return (
        <div className='order'>
            <h2 className='order__title'>Оформление заказа</h2>
            <p className='order__text'>Персональные данные:</p>
            <form className='order__form' onSubmit={handleSubmit(handleOrders)}>
                <div className='order__left'>
                    <div className='order__inputs'>
                        <div>
                            <input {...register("name")} className='order__input' placeholder='Ваше имя*' type="text"/>
                            <input {...register("surname")} className='order__input' placeholder='Ваша фамилия*'
                                   type="text"/>
                        </div>
                        <div>
                            <input {...register("email")} defaultValue={user.email} className='order__input'
                                   placeholder='Ваш e-mail*' type="email"/>
                            <input {...register("phone")} defaultValue={user.phone} className='order__input'
                                   placeholder='Ваш телефон*' type="tel"/>
                        </div>

                    </div>
                    <p className='order__text'>Способ доставки:</p>
                    <div className='order__delivery'>
                        <ul className='order__list'>
                            <li className='order__item2'>По Украине:</li>
                            <li className='order__item2'><input name='radio' type="radio"/>Самовывоз - вул. Большая
                                Васильковская 14(м. Льва Толстого)
                            </li>
                            <li className='order__item2'><input name='radio' type="radio"/>Новая Почта</li>
                        </ul>
                        <ul>
                            <li className='order__item2'>Международная доставка:</li>
                            <li className='order__item2'><input name='radio' type="radio"/>Украпочта / 1-3 недели / 30$
                            </li>
                            <li className='order__item2'><input name='radio' type="radio"/>DHL / 3-7 дней / 60$</li>
                        </ul>
                    </div>
                    <p className='order__text'>Адрес доставки:</p>
                    <div className='order__inputs'>
                        <input className='order__input' placeholder='Город*' type="text"/>
                        <input className='order__input' placeholder='Отделение почты*' type="text"/>
                    </div>
                    <p className='order__text'>Вы можете оплатить покупку одним из ниже перечисленных способов:</p>
                    <div className='order__inputs'>
                        <ul className='order__list'>
                            <li className='order__item2'><input type="radio"/>Полная предоплата через Приват 24</li>
                            <li className='order__item2'><input type="radio"/>Наложенным платежом в отделении Новой
                                Почты
                            </li>
                        </ul>
                        <p className='order__item2'><input type="radio"/>Денежным переводом Visa/MasterCard</p>
                    </div>
                    <p className='order__item2'>Использование бонусного счёта:</p>
                    <input className='order__inpt' placeholder='Сумма списания бонусов*' type="text"/>
                </div>
                <div className='order__right'>
                    <p className='order__login'>Войти в личный кабинет</p>
                    <p className='order__underline'>УСЛОВИЯ ДОСТАВКИ</p>
                    <p className='order__underline'>УСЛОВИЯ ОБМЕНА И ВОЗВРАТА</p>
                    <p className='order__underline'>ИНФОРМАЦИЯ ОБ ОПЛАТЕ</p>
                    <div className='order__total'>
                        <div className='order__subtitle'>
                            <ul className='order__sub'>
                                <li className='order__information'>ДОСТАВКА:</li>
                                <li className='order__information'>БОНУСЫ:</li>
                                <li className='order__information'>ИТОГО:</li>
                            </ul>
                            <ul className='order__sub'>
                                <li className='order__grn'>По тарифам перевозчика</li>
                                <li className='order__grn'>-69 грн</li>
                                <li className='order__grn'>{basket.reduce((acc, rec) => acc + rec.count * rec.price, 0)}</li>
                            </ul>
                        </div>
                        <button className='order__btn' type='submit'>ОФОРМИТЬ ЗАКАЗ</button>

                        <p className='order__agree'>Нажимая на кнопку «оплатить заказ», <br/>
                            я принимаю условия публичной оферты и политики конфиденциальности</p>
                    </div>
                </div>
            </form>
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
        </div>
    );
};

export default Order;