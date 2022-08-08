import React from 'react';
import Crumbs from "../Crumbs/Crumbs";

const Delivery = () => {
    return (
        <main>
            <div className="container">
                <Crumbs title='Доставка'/>
                <div className="delivery">
                    <h2 className='delivery__title'>Доставка</h2>
                    <h2 className='delivery__descr'>Доставку осуществляем по всему Кыргызстану.</h2>
                    <ul className='delivery__list'>
                        <li className='delivery__item'>По городу Бишкек в день заказа до 21:00 часов</li>
                        <li className='delivery__item'>По областям КР: заказы поступившие до 16:00 часов, доставляются на следующий день, после 16:00 через 2 дня
                            Также вы можете забрать самовывозом в нашем магазине по адресу Байтик баатыра 36/1, 2 этаж
                        </li>
                    </ul>
                    <h2 className='delivery__descr'>Доставка по РК, РФ отправляются через CDEK, крупные заказы через Карго</h2>
                    <h2 className='delivery__descr'>Оптовым клиентам</h2>
                    <p className='delivery__item'>Дорогие партнеры, мы готовы сотрудничать и открыты по всем направлениям</p>

                    <ul className='delivery__list'>
                        <li className='delivery__item'>Компании, которые хотят запустить свой мерч, мы можем отшить под вас партию футболок, батников, худи и многое другое с вашим логотипом</li>
                        <li className='delivery__item'>Владельцы магазинов, которые хотят обновить ассортимент ходовыми высококачественными товарами</li>
                        <li className='delivery__item'>Оптовики, которые поставляют в магазины, бутики</li>
                        <li className='delivery__item'>Предприниматели, которые выходят на маркетплейсы</li>
                    </ul>
                    <h2 className='delivery__descr'>По всем вопросам пишите в WhatsApp или Telegram +996700182558</h2>




                </div>

            </div>
        </main>
    );
};

export default Delivery;