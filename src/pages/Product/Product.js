import React, {useRef, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {MdOutlineFavoriteBorder} from 'react-icons/md'
import {Autoplay, FreeMode, Keyboard, Mousewheel, Navigation, Thumbs} from "swiper";
import img from './img/Rectangle 10 (3).png'
import img1 from './img/Rectangle 25.png'
import img2 from './img/Rectangle 24.png'
import img3 from './img/Rectangle 23.png'
import img4 from './img/Rectangle 22.png'
import img5 from './img/Rectangle 21.png'
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import {Link, NavLink, useLocation, useParams} from "react-router-dom";
import Rec from "./Rec/Rec";
import {useDispatch, useSelector} from "react-redux";
import BtnForFavorites from "../BtnForFavorites/BtnForFavorites";
import {addCart} from "../../redux/reducers/basket";

const Product = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [isActive, setIsActive] = useState(false);
    const [color, setColor] = useState("black");
    const [size, setSize] = useState('');
    const params = useParams();
    const clothes = useSelector(s =>  s.clothes.clothes);
    const user = useSelector(s =>  s.user.user);
    const location = useLocation();
    const [count, setCount] = useState(1);
    const basket = useSelector(s => s.basket.basket)
    const dispatch = useDispatch();
    return (

        <section className='product'>
            <div className="container">
                <div className="catalog__crumbs">
                    <Link className="catalog__link" to='/'>Главная</Link>
                    >
                    <Link className="catalog__link" to='/catalog/all'>Каталог</Link>
                    >
                    <NavLink to='/product' className="catalog__link">Кремовое пальто</NavLink>
                </div>
                <div className='product__content'>
                    <div className='product__card'>
                        <Swiper
                            style={{
                                "--swiper-navigation-color": "#fff",
                                "--swiper-pagination-color": "#fff",
                            }}
                            Mousewheel={false}
                            spaceBetween={50}
                            thumbs={{swiper: thumbsSwiper}}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2"
                        >
                            <SwiperSlide>
                                <img src={img}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img1}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img2}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img3}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img4}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img5}/>
                            </SwiperSlide>

                        </Swiper>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={10}
                            slidesPerView={5}

                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper swiper-nurs product"
                        >
                            <div className='swiper__opacity'><SwiperSlide>
                                <img src={img}/>
                            </SwiperSlide>
                                <SwiperSlide>
                                    <img src={img1}/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={img2}/>
                                </SwiperSlide> <SwiperSlide>
                                    <img src={img3}/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={img4}/>
                                </SwiperSlide></div>
                        </Swiper>
                    </div>
                    {
                        clothes.filter(item => item.id === +params.id).map(item => (
                            <div className='product__right'>
                                <p className='product__title'>{item.title}</p>
                                <p className='product__price'>{item.priceSale
                                    ? <>
                                        <span style={{textDecoration: 'line-through'}}>{item.price}</span>
                                        <span className='product__price-line'>-</span>
                                        <span className='product__price-sale'>{item.priceSale} грн</span>
                                    </>
                                    : item.price}</p>
                                <ul className='product__content-sizes'>
                                    {
                                        item.colors.map(item => (
                                            <li key={item} onClick={() => setColor(item)} style={{background: item, border: '1px solid grey', cursor: 'pointer'}} className={`product__content-color ${item === color ? 'product__content-color_active' : ''}`}/>
                                        ))
                                    }
                                </ul>

                                <ul style={{marginTop: '40px'}} className='product__content-sizes'>
                                    {
                                        item.size.map(item => (
                                            <li key={item} onClick={() => setSize(item)} className={`product__content-size ${item === size ? 'product__content-size_active' : ''} `}>{item}</li>
                                        ))
                                    }
                                </ul>
                                {
                                    item.inStock ?
                                        <p className='product__content-choose'>
                                            В наличии : <span>{item.inStock}</span>
                                        </p> :
                                        <p className='product__content-choose'>
                                            Нет в наличии !
                                        </p>
                                }
                                <div className='product__btns'>
                                    <input className='product__input' style={{color: !item.inStock ? "grey" : "black"}} disabled={!item.inStock} min='1'  max={item.inStock} value={count} onChange={(e) => setCount(e.target.value >= item.inStock ? item.inStock : e.target.value)} type="number"/>
                                    <button className='product__btn1' type='button' onClick={ () => {
                                     dispatch(addCart({
                                            id: item.id,
                                            title: item.title,
                                            image: item.image,
                                            color,
                                            size,
                                            count,
                                            price: item.priceSale || item.price,
                                            category: item.category}))

                                    } }>В КОРЗИНУ</button>
                                </div>
                                {
                                    user.email?.length || user.phoneNumber?.length ?
                                        <BtnForFavorites product={true} item={item}/> : ''
                                }

                                    <p className='product__save' onClick={() => setIsActive(!isActive)}>
                                        Состав и уход
                                        {
                                            isActive ?

                                                <svg width="10" height="5" viewBox="0 0 10 5" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M4.52189 4.80888L0.698002 1.11512C0.434006 0.860095 0.433995 0.44661 0.697994 0.191586C0.961993 -0.0634387 1.39003 -0.0634287 1.65402 0.191593L4.99983 3.42366L8.34597 0.191264C8.60997 -0.0637608 9.038 -0.0637508 9.302 0.191271C9.566 0.446293 9.566 0.859778 9.30201 1.1148L5.49346 4.79388C5.48845 4.79904 5.48314 4.80385 5.47792 4.80889C5.24693 5.03171 4.89016 5.05981 4.62792 4.89255C4.59042 4.86862 4.5549 4.84077 4.52189 4.80888Z"
                                                        fill="#363A45"/>
                                                </svg>
                                                :
                                                <svg width="10" height="5" viewBox="0 0 10 5" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M4.52189 0.191117L0.698002 3.88488C0.434006 4.13991 0.433995 4.55339 0.697994 4.80841C0.961993 5.06344 1.39003 5.06343 1.65402 4.80841L4.99983 1.57634L8.34597 4.80874C8.60997 5.06376 9.038 5.06375 9.302 4.80873C9.566 4.55371 9.566 4.14022 9.30201 3.8852L5.49346 0.206122C5.48845 0.200956 5.48314 0.196155 5.47792 0.19111C5.24693 -0.0317101 4.89016 -0.0598059 4.62792 0.107452C4.59042 0.131378 4.5549 0.159229 4.52189 0.191117Z"
                                                        fill="#363A45"/>
                                                </svg>

                                        }

                                        {
                                            isActive &&
                                            <ul className='product__descr'>
                                                <li className='product__safe product__safe1'>Состав: 50% Шерсть, 50% Полиэстер</li>
                                                <li className='product__safe'>Подкладка: 100% Полиэстер</li>
                                                <li className='product__safe'>Утеплитель: 90% Пух, 10% Перо</li> <br/>
                                                <li className='product__safe'>- Не стирать</li>
                                                <li className='product__safe'>- Гладить при температуре утюга до 110°C</li>
                                                <li className='product__safe'>- Не отбеливать</li>
                                                <li className='product__safe'>- Сухая чистка (химчистка)</li>
                                                <li className='product__safe'>- Барабанная сушка запрещена</li>
                                            </ul>
                                        }
                                    </p>
                            </div>
                        )
                        )
                    }
                </div>
                <Rec/>
            </div>
        </section>
    );
};

export default Product;