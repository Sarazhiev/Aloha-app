import React from 'react';

const First = () => {
    return (
        <section className='first'>
            <div className="container">
                <h2 className='first__title'>Узнайте  первым о новинках</h2>
                <form className='first__form'>
                    <input placeholder='Ваш e-mail*' className='first__input' type="email"/>
                    <button className='first__btn' type='submit'>ПОДПИСАТЬСЯ</button>
                    <p className='first__agree'>Нажимая на кнопку «Подписаться», я соглашаюсь на обработку моих <br/>
                    персональных данных и ознакомлен(а) с условиями конфиденциальности.</p>
                </form>
            </div>
        </section>
    );
};

export default First;