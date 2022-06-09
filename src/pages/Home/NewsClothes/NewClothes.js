import React from 'react';
import {Autoplay, Keyboard, Mousewheel, Navigation} from "swiper";
import img1 from "../Category/Rectangle 7.png";
import {useSelector} from "react-redux";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Link} from "react-router-dom";

const NewClothes = () => {
    const clothes = useSelector(s =>  s.clothes.clothes);
    return (
        <section>
            <div className="container">
                <h2 className='category__title'>Новое поступление</h2>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}

                    autoplay={{
                        delay: 3500,
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
                        clothes && clothes.filter((item, idx, array) => idx > array.length - 5).map(item => (
                            <SwiperSlide key={item.id}>
                                <div className='category__content'>
                                    <Link className='catalog__content-link' to={`/product/${item.id}`}>
                                    <img className='category__img' src={img1} alt="img"/>
                                    </Link>
                                    <p className='category__text'>{item.title}</p>
                                </div>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>
        </section>
    );
};

export default NewClothes;