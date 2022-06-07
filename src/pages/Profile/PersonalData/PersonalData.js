import React from 'react';

const PersonalData = () => {
    return (
        <div className='personal'>
            <div className="container">
                <h2 className='personal__title'>Персональные данные:</h2>
                <div className='personal__inputs'>
                    <input className='personal__input' type="text"/>
                    <input className='personal__input' type="text"/>
                    <input className='personal__input' type="email"/>
                    <input className='personal__input' type="text"/>
                </div>
                <h2 className='personal__title'>Адрес доставки:</h2>
                <div className='personal__inputs'>
                    <input className='personal__order' type="text"/>
                    <input className='personal__order' type="text"/>
                </div>
                <button className='personal__btn'>ОБНОВИТЬ ИНФОРМАЦИЮ</button>
            </div>
        </div>
    );
};

export default PersonalData;