import React from 'react';
import Crumbs from "../Crumbs/Crumbs";

const Care = () => {
    return (
        <div className="delivery">
            <div className='container'>
                <Crumbs title='Ткани и уход'/>
                <h2 className='delivery__title'>Ткани и уход</h2>
                <p className='delivery__item'>При производстве мы используем натуральные ткани из высококачественного трикотажа, Преимущества наших тканей:</p>
                <ul className='delivery__list'>
                    <li className='delivery__item'>Состоят в основном из хлопка, а значит хорошо пропускают воздух</li>
                    <li className='delivery__item'>Не вызывают аллергию</li>
                    <li className='delivery__item'>Не теряют форму и не скатываются</li>
                </ul>
            </div>

        </div>
    );
};

export default Care;