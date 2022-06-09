import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Navigation, Pagination, Mousewheel, Keyboard, Autoplay} from "swiper";
import img1 from './Rectangle 7.png'
import img2 from './Rectangle 9.png'
import img3 from './Rectangle 10.png'
import img4 from './Rectangle 11.png'
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Category = () => {

    const clothes = useSelector(s => s.clothes.clothes.filter((item, idx, arr) => arr.map(el => el.category).indexOf(item.category) === idx))

    return (

        <section className='category'>
            <div className="container">
                <h2 className='category__title'>Категории</h2>

                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}

                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    autoPlay={true}
                    keyboard={true}
                    navigation={true}
                    modules={[Navigation, Mousewheel, Keyboard, Autoplay]}
                    className="mySwiper"
                >
                    {
                        clothes && clothes.map(item => (
                            <SwiperSlide key={item.id}>
                                <div className='category__content'>
                                    <Link className='catalog__content-link' to={`/catalog/${item.category}`}>
                                    <img className='category__img' src={img1} alt="img"/>
                                    </Link>
                                    <p className='category__text'>{item.category}</p>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default Category;