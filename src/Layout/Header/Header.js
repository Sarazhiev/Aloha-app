import React, {useState} from "react";
import {FiSearch} from 'react-icons/fi'
import {BiUser} from 'react-icons/bi'
import {RiShoppingCart2Line} from 'react-icons/ri'
import {MdOutlineFavoriteBorder} from 'react-icons/md'
import {NavLink, Link} from "react-router-dom";

const Header = () => {
    const [burger, setBurger] = useState(false);
    const [isActive, setIsActive] = useState(null);
    const [isActive2, setIsActive2] = useState(null);
    return (
        <header id='header' className='header'>
            <div className="container">
                <nav className='header__nav'>
                    <div className={`burger ${burger ? 'burger_active' : ''}`} onClick={() => setBurger(!burger)}>
                    <span className='burger__line'>

                    </span>
                    </div>
                    <div onClick={() => setBurger(false)} className={`overlay ${burger ? 'overlay_active' : ''}`}>

                    </div>
                    <Link to='/'>
                        <h1 className='header__nav-title'><svg width="195" height="40" viewBox="0 0 195 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M38.26 0.42989C38.3419 0.42989 38.3828 0.552714 38.3828 0.798363C38.3828 1.04401 38.3419 1.16684 38.26 1.16684C36.9908 1.16684 35.435 1.9652 33.5926 3.56193C31.7503 5.11771 30.1126 7.08291 28.6796 9.45752L22.2927 20.1433V33.8383C22.2927 35.1075 22.3951 36.0287 22.5998 36.6018C22.8045 37.175 23.1935 37.564 23.7666 37.7687C24.3808 37.9734 25.3429 38.0757 26.653 38.0757C26.7758 38.0757 26.8373 38.1986 26.8373 38.4442C26.8373 38.6899 26.7758 38.8127 26.653 38.8127C25.3019 38.8127 24.2375 38.7922 23.4596 38.7513L18.8536 38.6899L14.3091 38.7513C13.4903 38.7922 12.3849 38.8127 10.9928 38.8127C10.911 38.8127 10.87 38.6899 10.87 38.4442C10.87 38.1986 10.911 38.0757 10.9928 38.0757C12.303 38.0757 13.2651 37.9734 13.8792 37.7687C14.4933 37.564 14.9028 37.175 15.1075 36.6018C15.3531 35.9877 15.4759 35.0665 15.4759 33.8383V21.433L6.50972 7.49232C4.99488 5.11771 3.72569 3.48004 2.70215 2.57933C1.71955 1.63767 0.880246 1.16684 0.184238 1.16684C0.0614125 1.16684 0 1.04401 0 0.798363C0 0.552714 0.0614125 0.42989 0.184238 0.42989L2.08802 0.491302C2.98874 0.573184 3.62334 0.614124 3.99181 0.614124C5.42477 0.614124 7.49232 0.573184 10.1945 0.491302L14.2477 0.42989C14.3296 0.42989 14.3705 0.552714 14.3705 0.798363C14.3705 1.04401 14.3296 1.16684 14.2477 1.16684C13.5517 1.16684 12.999 1.3306 12.5896 1.65814C12.2211 1.98567 12.0368 2.41556 12.0368 2.9478C12.0368 3.60287 12.3234 4.38076 12.8966 5.28148L21.3101 18.5466L26.9601 8.90481C28.0655 7.06244 28.6182 5.48619 28.6182 4.17605C28.6182 3.19345 28.3112 2.4565 27.697 1.9652C27.1238 1.43296 26.2845 1.16684 25.1791 1.16684C25.0563 1.16684 24.9949 1.04401 24.9949 0.798363C24.9949 0.552714 25.0563 0.42989 25.1791 0.42989L28.434 0.491302C30.3173 0.573184 31.9959 0.614124 33.4698 0.614124C34.1658 0.614124 35.0051 0.573184 35.9877 0.491302L38.26 0.42989Z" fill="#E0BEA2"/>
                            <path d="M81.765 38.0757C81.9697 38.0757 82.072 38.1986 82.072 38.4442C82.072 38.6899 81.9697 38.8127 81.765 38.8127C80.9461 38.8127 79.6769 38.7718 77.9574 38.6899C76.156 38.608 74.8663 38.567 74.0884 38.567C73.0649 38.567 71.8162 38.608 70.3423 38.6899C68.9502 38.7718 67.8448 38.8127 67.026 38.8127C66.8622 38.8127 66.7803 38.6899 66.7803 38.4442C66.7803 38.1986 66.8622 38.0757 67.026 38.0757C68.0905 38.0757 68.8479 37.9734 69.2982 37.7687C69.7895 37.523 70.0352 37.1136 70.0352 36.5404C70.0352 35.8444 69.6258 34.6776 68.8069 33.0399L64.6309 24.7492H49.5234L47.1283 30.0921C46.5961 31.2794 46.33 32.3849 46.33 33.4084C46.33 34.8823 46.8417 36.0287 47.8653 36.8475C48.9298 37.6663 50.3422 38.0757 52.1027 38.0757C52.3074 38.0757 52.4098 38.1986 52.4098 38.4442C52.4098 38.6899 52.3074 38.8127 52.1027 38.8127C51.3658 38.8127 50.3013 38.7718 48.9093 38.6899C47.3535 38.608 46.0024 38.567 44.8561 38.567C43.7506 38.567 42.42 38.608 40.8643 38.6899C39.4722 38.7718 38.3463 38.8127 37.4866 38.8127C37.3228 38.8127 37.2409 38.6899 37.2409 38.4442C37.2409 38.1986 37.3228 38.0757 37.4866 38.0757C38.6329 38.0757 39.5951 37.8506 40.373 37.4002C41.1508 36.9089 41.9287 36.0696 42.7066 34.8823C43.4845 33.654 44.4057 31.8526 45.4702 29.478L58.7967 0.184239C58.8786 0.0614129 59.0628 0 59.3494 0C59.6769 0 59.8612 0.0614129 59.9021 0.184239L75.2552 30.3992C76.6882 33.306 77.8755 35.3122 78.8172 36.4176C79.7588 37.523 80.7414 38.0757 81.765 38.0757ZM50.3218 23.0297H63.7097L56.6473 9.02764L50.3218 23.0297Z" fill="#E0BEA2"/>
                            <path d="M129.164 0.42989C129.246 0.42989 129.287 0.552714 129.287 0.798363C129.287 1.04401 129.246 1.16684 129.164 1.16684C127.527 1.16684 126.237 1.8219 125.295 3.13204C124.354 4.40123 123.883 6.12078 123.883 8.29069V39.7339C123.883 39.8567 123.781 39.9386 123.576 39.9795C123.412 40.0205 123.289 40 123.207 39.9181L94.4049 7.12385V31.0133C94.4049 33.1832 94.8553 34.9028 95.756 36.172C96.6567 37.4411 97.9054 38.0757 99.5021 38.0757C99.584 38.0757 99.625 38.1986 99.625 38.4442C99.625 38.6899 99.584 38.8127 99.5021 38.8127C98.3558 38.8127 97.4755 38.7922 96.8614 38.7513L93.5451 38.6899L89.7376 38.7513C89.0416 38.7922 88.0385 38.8127 86.7283 38.8127C86.6055 38.8127 86.5441 38.6899 86.5441 38.4442C86.5441 38.1986 86.6055 38.0757 86.7283 38.0757C88.5298 38.0757 89.9423 37.4411 90.9658 36.172C92.0303 34.9028 92.5625 33.1832 92.5625 31.0133V5.03582C91.2115 3.56192 90.0446 2.55885 89.062 2.02661C88.1204 1.45343 87.1378 1.16684 86.1142 1.16684C86.0323 1.16684 85.9914 1.04401 85.9914 0.798363C85.9914 0.552714 86.0323 0.42989 86.1142 0.42989L88.6935 0.491302C89.2258 0.532243 90.0037 0.552714 91.0272 0.552714L95.6946 0.491302C96.2678 0.450361 96.9638 0.42989 97.7826 0.42989C98.1101 0.42989 98.3558 0.511772 98.5195 0.675537C98.6833 0.839303 98.9699 1.18731 99.3793 1.71955C100.075 2.66121 100.567 3.2958 100.853 3.62334L122.102 28.1269V8.29069C122.102 6.07984 121.652 4.33982 120.751 3.07063C119.85 1.80143 118.601 1.16684 117.005 1.16684C116.923 1.16684 116.882 1.04401 116.882 0.798363C116.882 0.552714 116.923 0.42989 117.005 0.42989L119.645 0.491302C120.956 0.573184 122.061 0.614124 122.962 0.614124C123.781 0.614124 124.927 0.573184 126.401 0.491302L129.164 0.42989Z" fill="#E0BEA2"/>
                            <path d="M173.771 38.0757C173.894 38.0757 173.956 38.1986 173.956 38.4442C173.956 38.6899 173.894 38.8127 173.771 38.8127H166.893C166.238 38.8127 165.685 38.8332 165.235 38.8741C164.785 38.915 164.416 38.9355 164.13 38.9355C163.475 38.9355 162.901 38.7922 162.41 38.5056C161.96 38.1781 161.387 37.6049 160.691 36.7861C160.035 35.9672 158.848 34.391 157.129 32.0573C156.924 31.7707 156.678 31.4637 156.392 31.1361C156.146 30.7677 155.859 30.3582 155.532 29.9079L147.487 19.0993L146.136 20.4504V33.8383C146.136 35.1075 146.238 36.0287 146.443 36.6018C146.648 37.175 147.037 37.564 147.61 37.7687C148.224 37.9734 149.186 38.0757 150.496 38.0757C150.66 38.0757 150.742 38.1986 150.742 38.4442C150.742 38.6899 150.66 38.8127 150.496 38.8127C149.145 38.8127 148.081 38.7922 147.303 38.7513L142.697 38.6899L138.152 38.7513C137.333 38.7922 136.228 38.8127 134.836 38.8127C134.754 38.8127 134.713 38.6899 134.713 38.4442C134.713 38.1986 134.754 38.0757 134.836 38.0757C136.146 38.0757 137.108 37.9734 137.722 37.7687C138.336 37.564 138.746 37.175 138.951 36.6018C139.196 35.9877 139.319 35.0665 139.319 33.8383V5.4043C139.319 4.17605 139.196 3.27534 138.951 2.70215C138.746 2.12897 138.336 1.74002 137.722 1.53531C137.149 1.28966 136.228 1.16684 134.959 1.16684C134.836 1.16684 134.775 1.04401 134.775 0.798363C134.775 0.552714 134.836 0.42989 134.959 0.42989L138.214 0.491302C140.097 0.573184 141.591 0.614124 142.697 0.614124C143.925 0.614124 145.481 0.573184 147.364 0.491302L150.496 0.42989C150.619 0.42989 150.68 0.552714 150.68 0.798363C150.68 1.04401 150.619 1.16684 150.496 1.16684C149.227 1.16684 148.285 1.28966 147.671 1.53531C147.098 1.78096 146.689 2.21085 146.443 2.82497C146.238 3.39816 146.136 4.29887 146.136 5.52712V18.5466L157.681 6.75538C158.869 5.56807 159.462 4.48311 159.462 3.50051C159.462 2.76356 159.135 2.19038 158.48 1.78096C157.825 1.37155 156.903 1.16684 155.716 1.16684C155.593 1.16684 155.532 1.04401 155.532 0.798363C155.532 0.552714 155.593 0.42989 155.716 0.42989L158.603 0.491302C160.404 0.573184 162.083 0.614124 163.638 0.614124C165.317 0.614124 167.057 0.573184 168.858 0.491302L171.622 0.42989C171.745 0.42989 171.806 0.552714 171.806 0.798363C171.806 1.04401 171.745 1.16684 171.622 1.16684C169.739 1.16684 167.671 1.71955 165.419 2.82497C163.168 3.88946 161.12 5.32242 159.278 7.12385L152.338 14.1863L161.428 26.4688C164.089 30.2764 166.074 32.9785 167.385 34.5752C168.736 36.131 169.821 37.1136 170.639 37.523C171.458 37.8915 172.502 38.0757 173.771 38.0757Z" fill="#E0BEA2"/>
                            <path d="M190.247 33.8383C190.247 35.1075 190.349 36.0287 190.554 36.6018C190.759 37.175 191.147 37.564 191.721 37.7687C192.335 37.9734 193.297 38.0757 194.607 38.0757C194.73 38.0757 194.791 38.1986 194.791 38.4442C194.791 38.6899 194.73 38.8127 194.607 38.8127C193.256 38.8127 192.191 38.7922 191.414 38.7513L186.746 38.6899L182.202 38.7513C181.383 38.7922 180.277 38.8127 178.885 38.8127C178.804 38.8127 178.763 38.6899 178.763 38.4442C178.763 38.1986 178.804 38.0757 178.885 38.0757C180.196 38.0757 181.158 37.9734 181.772 37.7687C182.386 37.564 182.795 37.175 183 36.6018C183.246 35.9877 183.369 35.0665 183.369 33.8383V5.4043C183.369 4.17605 183.246 3.27534 183 2.70215C182.795 2.12897 182.386 1.74002 181.772 1.53531C181.158 1.28966 180.196 1.16684 178.885 1.16684C178.804 1.16684 178.763 1.04401 178.763 0.798363C178.763 0.552714 178.804 0.42989 178.885 0.42989L182.202 0.491302C184.085 0.573184 185.6 0.614124 186.746 0.614124C188.015 0.614124 189.592 0.573184 191.475 0.491302L194.607 0.42989C194.73 0.42989 194.791 0.552714 194.791 0.798363C194.791 1.04401 194.73 1.16684 194.607 1.16684C193.338 1.16684 192.396 1.28966 191.782 1.53531C191.168 1.78096 190.759 2.21085 190.554 2.82497C190.349 3.39816 190.247 4.29887 190.247 5.52712V33.8383Z" fill="#E0BEA2"/>
                        </svg>
                        </h1>

                    </Link>
                    <div className='header__nav-right'>
                            <button className='header__nav-btn'>Ru</button>
                            <button className='header__nav-btn'>En</button>
                        <ul className='header__nav-list'>
                            <NavLink to='/' className='header__nav-item'><FiSearch/></NavLink>
                            <span>
                                <NavLink to='/profile' className='header__nav-item header__nav-item2'><BiUser/></NavLink>
                                <Link to='/login' className='header__nav-item2'>войти</Link>
                            </span>


                            <NavLink to='/favorites' className='header__nav-item'><MdOutlineFavoriteBorder/></NavLink>
                            <NavLink to='/basket' className='header__nav-item'><RiShoppingCart2Line/></NavLink>
                        </ul>
                    </div>
                    <ul  className={`header__list ${burger ? 'header__list_active' : ''}`}>
                        <Link to='catalog/all' className='header__nav-items'>ПОСМОТРЕТЬ ВСЕ</Link>
                        <li className='header__nav-items'>БЕСТСЕЛЛЕРЫ</li>
                        <li className='header__nav-items'>
                            <Link to={`/catalog/new`}>НОВИНКИ</Link></li>
                        <li className='header__nav-items' >Мужчинам <button className='header__nav-arrow' onClick={() => setIsActive(!isActive)}>
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
                        </button>
                            {
                                isActive && <ul className='header__nav-lists'>
                                    <li className='header__nav-itm'>Посмотреть все</li>
                                    <li className='header__nav-itm'>Худи</li>
                                    <li className='header__nav-itm'>Свитшоты</li>
                                    <li className='header__nav-itm'>Футболки</li>
                                    <li className='header__nav-itm'>Штаны</li>
                                    <li className='header__nav-itm'>Рубашки</li>
                                    <li className='header__nav-itm'>Куртки</li>
                                    <li className='header__nav-itm'>Жилеты</li>
                                    <li className='header__nav-itm'>Аксессуары</li>
                                    <li className='header__nav-itm'>Шорты</li>
                                </ul>
                            }
                        </li>
                        <li className='header__nav-items'>Женщинам <button className='header__nav-arrow' onClick={() => setIsActive2(!isActive2)}>
                            {
                                isActive2 ? <svg width="16" height="10" viewBox="0 0 16 10" fill="none"
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
                        </button>

                            {
                                isActive2 && <ul className='header__nav-lists'>
                                    <li className='header__nav-itm'>Посмотреть все</li>
                                    <li className='header__nav-itm'>Худи</li>
                                    <li className='header__nav-itm'>Свитшоты</li>
                                    <li className='header__nav-itm'>Футболки</li>
                                    <li className='header__nav-itm'>Штаны</li>
                                    <li className='header__nav-itm'>Рубашки</li>
                                    <li className='header__nav-itm'>Куртки</li>
                                    <li className='header__nav-itm'>Жилеты</li>
                                    <li className='header__nav-itm'>Аксессуары</li>
                                    <li className='header__nav-itm'>Шорты</li>
                                </ul>
                            }
                        </li>
                        <li className='header__nav-items'>Корпоративные заказы и оптом</li>
                    </ul>

                </nav>
            </div>
        </header>
    );
};

export default Header;