import React from 'react';
import Crumbs from "../Crumbs/Crumbs";

const Loyal = () => {
    return (
        <div className="delivery">
            <div className='container'>
                <Crumbs title='Программа лояльности'/>
                <h2 className='delivery__title'>Программа лояльности</h2>
                <p className='delivery__item'>У нас действует бонусная программа
                    При покупке любой вещи, вам начисляется 5% от суммы в виде бонусов. Бонусы можно использовать при
                    следующих покупках, по курсу 1 бонус = 1сом</p>
            </div>
        </div>
    );
};

export default Loyal;