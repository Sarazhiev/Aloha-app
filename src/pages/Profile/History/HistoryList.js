import React, {useState} from 'react';
import img from "../Rectangle 10 (5).png";

const HistoryList = ({item, user}) => {
    console.log(item)
    const [isActive, setIsActive] = useState(false);
    return (
        <div className='history__order'>
            <ul className='history__list'>
                <li className='history__item'>Дата: {item.time.toString().slice(0, 10)}</li>
                <li className='history__item'>Статус: {item.status} </li>
                <li className='history__item'>Сумма заказа: <span>{item.price}</span></li>
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
                            <li className='history__item'><img style={{width: '100px'}} src={`http://localhost:4444${item.orders[0].image}`} alt=""/></li>
                            <li className='history__item'>{item.orders[0].title}</li>
                            <li className='history__item history__item-color'>{item.orders[0].color}</li>
                            <li className='history__item'>Размер: <span>{item.orders[0].size}</span></li>
                            <li className='history__item'>Количество: <span>{item.orders[0].count}</span></li>
                            <li className='history__item history__item-price'>{item.orders[0].price}</li>
                        </ul>
                        <div className='history__info'>
                            <div>
                                <p className='history__about'>Имя: <span className='profile__abouts'>{item.name}</span></p>
                                <p className='history__about'> Фамилия: <span className='profile__abouts'>{item.surname}</span></p>
                            </div>
                            <div>
                                <p className='history__about'>E-mail: <span className='profile__abouts'>{item.email}</span></p>
                                <p className='history__about'>Номер телефона: <span className='profile__abouts'>{item.phone}</span></p>
                            </div>
                        </div></>
            }
        </div>
    );
};

export default HistoryList;