import React from 'react';
import {useSelector} from "react-redux";


const PersonalData = () => {
    const user = useSelector(s => s.user.user);
    return (
        <div className='personal'>
            <div className="container">
                <h2 className='personal__title'>Персональные данные:</h2>
                <div className='personal__inputs'>

                    {
                        user.login && <input className='personal__input' type="text" disabled defaultValue={user.login}/>
                    }

                    {
                        user.email && <input className='personal__input' type="text" disabled defaultValue={user.email}/>
                    }

                    {
                        user.phone && <input className='personal__input' type="email" disabled defaultValue={user.phone}/>
                    }

                    {
                        user.phoneNumber && <input className='personal__input' type="email" disabled defaultValue={user.phoneNumber}/>
                    }

                </div>
                {/*<h2 className='personal__title'>Адрес доставки:</h2>*/}
                {/*<div className='personal__inputs'>*/}
                {/*    <input className='personal__order' type="text"/>*/}
                {/*    <input className='personal__order' type="text"/>*/}
                {/*</div>*/}
                {/*<button className='personal__btn'>ОБНОВИТЬ ИНФОРМАЦИЮ</button>*/}
            </div>
        </div>
    );
};

export default PersonalData;