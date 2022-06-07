import React from 'react';

const Order = () => {
    return (
        <div className='order'>
            <h2 className='order__title'>Оформление заказа</h2>
            <p className='order__text'>Персональные данные:</p>
            <form className='order__form'>
                <div className='order__left'>
                    <div className='order__inputs'>
                        <div>
                            <input className='order__input' placeholder='Ваше имя*' type="text"/>
                            <input className='order__input' placeholder='Ваша фамилия*' type="text"/>
                        </div>
                        <div>
                            <input className='order__input' placeholder='Ваш e-mail*' type="email"/>
                            <input className='order__input' placeholder='Ваш телефон*' type="number"/>
                        </div>

                    </div>
                    <p className='order__text'>Способ доставки:</p>
                    <div className='order__delivery'>
                        <ul className='order__list'>
                            <li className='order__item2'>По Украине:</li>
                            <li className='order__item2'><input name='radio' type="radio" />Самовывоз - вул. Большая Васильковская 14(м. Льва Толстого)</li>
                            <li className='order__item2'><input name='radio' type="radio" />Новая Почта</li>
                        </ul>
                        <ul>
                            <li className='order__item2'>Международная доставка:</li>
                            <li className='order__item2'><input name='radio' type="radio" />Украпочта / 1-3 недели / 30$</li>
                            <li className='order__item2'><input name='radio' type="radio" />DHL / 3-7 дней / 60$</li>
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
                            <li className='order__item2'><input type="radio"/>Наложенным платежом в отделении Новой Почты</li>
                        </ul>
                        <p className='order__item2'><input  type="radio"/>Денежным переводом  Visa/MasterCard</p>
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
                                <li className='order__grn'>15250 грн</li>
                            </ul>
                        </div>
                        <button className='order__btn' type='submit'>ОФОРМИТЬ ЗАКАЗ</button>
                        <p className='order__agree'>Нажимая на кнопку «оплатить заказ», я принимаю условия публичной оферты и политики конфиденциальности</p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Order;