import React from 'react';

const First = () => {
    return (
        <section className='first'>
            <div className="container">
                <h2 className='first__title'>Узнайте  первым о новинках</h2>
                <form className='first__form' action="https://formsubmit.co/9cab0f0d4b4b3eac39a71761002950ab " method="POST">
                    <input type="hidden" name="_captcha" value="false"/>
                    <input type="hidden" name="_next" value="http://87.236.22.119:8080/"/>
                    <input type="text" name="name" className="first__input" placeholder="Full Name" required/>
                    <br/>
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