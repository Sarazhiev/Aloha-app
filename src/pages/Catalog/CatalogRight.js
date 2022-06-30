import React, {useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import {animateScroll} from "react-scroll";
import {useSelector} from "react-redux";
import CatalogRow from "./CatalogRow";
import CatalogClothesLenght from "./CatalogClothesLenght";
import Select from "./SelectForGenderClothes/Select";

const CatalogRight = ({clothes, page, params}) => {
    const [status, setStatus] = useState('all');
    const user = useSelector(s => s.user.user);
    const [isActive] = useState(null);
    const [sort, setSort] = useState('');
    const [search, setSearch] = useState('');
    return (
        <div className='catalog__content-right'>
            <input className='catalog__inputSearch' placeholder='search' id='search' value={search}
                   onChange={(e) => setSearch(e.target.value)} type="search"/>
            <button className='catalog__accordion' onClick={() => setSearch(!isActive)}>
                Каталог
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
                {
                    isActive && <ul className={`catalog__accordion-list ${isActive ? 'catalog__accordion-list_active' : ''}`}>
                        <li className='catalog__content-item'>
                            <NavLink onClick={() => animateScroll.scrollToTop({
                                delay: 0,
                                duration: 0
                            })} className='catalog__content-item' to={`/catalog/new`}>New</NavLink>
                        </li>
                        <li  className='catalog__content-item'>Bestsellers</li>
                        {
                            clothes && clothes
                                .filter((item, idx, arr) => arr.map(el => el.category).indexOf(item.category) === idx)
                                .map((item) => (
                                    <li key={item.category} className='catalog__content-item'>
                                        <NavLink onClick={() => animateScroll.scrollToTop({
                                            delay: 0,
                                            duration: 0
                                        })} className='catalog__content-item'
                                                 to={`/catalog/${item.category}`}>{item.category}</NavLink>
                                    </li>
                                ))
                        }
                        <li className='catalog__content-item'>
                            <NavLink onClick={() => animateScroll.scrollToTop({
                                delay: 0,
                                duration: 0
                            })} className='catalog__content-item' to={`/catalog/sale`}>Sale</NavLink>
                        </li>
                        <li className='catalog__content-item'>
                            <NavLink onClick={() => animateScroll.scrollToTop({
                                delay: 0,
                                duration: 0
                            })} className='catalog__content-item' to={`/catalog/all`}>Посмотреть всё</NavLink>
                        </li>

                    </ul>
                }
            </button>
            <div className='shop__sort-type'>
                {sort
                    ? <h3 className='catalog__info'>Сортировка
                        : <span>{sort === 'big' ? 'к большему' : 'к меньшему'}</span></h3>
                    : ''
                }
                <div className='catalog__sorts'>
                    <div className='catalog__sorts-left'>
                        <button type='btn' className={`catalog__sort ${sort === 'big' ? 'active' : ''}`}
                                onClick={() => setSort('big' !== sort ? 'big' : '')}>К большему
                        </button>
                        <button type='btn' className={`catalog__sort ${sort === 'less' ? 'active' : ''}`}
                                onClick={() => setSort('less' !== sort ? 'less' : '')}>К меньшему
                        </button>
                    </div>
                    <Select setStatus={setStatus}/>
                </div>

            </div>


            <CatalogClothesLenght clothes={clothes} page={page} params={params}/>
            <CatalogRow status={status} page={page} params={params} clothes={clothes} user={user} sort={sort} search={search}/>
        </div>
    );
};

export default CatalogRight;