import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Navigation, Pagination, Mousewheel, Keyboard, Autoplay} from "swiper";
import {MdOutlineFavoriteBorder} from 'react-icons/md'
import img1 from "../../Home/Category/Rectangle 7.png";
import img2 from "../../Home/Category/Rectangle 9.png";
import img3 from "../../Home/Category/Rectangle 10.png";
import img4 from "../../Home/Category/Rectangle 11.png";
import {Link} from "react-router-dom";


const Rec = () => {
    return (
        <div className='rec'>
            <h3 className='rec__title'>Вам может понравиться</h3>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}

                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                autoPlay={true}
                keyboard={true}
                navigation={true}
                modules={[Navigation, Mousewheel, Keyboard, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide><div className='category__content'><Link className='catalog__content-link' to='/product'><img className='category__img' src={img1} alt="img"/></Link><p className='rec__name'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, vel?</p><button className='catalog__content-fav'><MdOutlineFavoriteBorder/></button></div></SwiperSlide>
                <SwiperSlide><div className='category__content'><Link className='catalog__content-link' to='/product'><img className='category__img' src={img2} alt="img"/></Link><p className='rec__name'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, vel?</p><button className='catalog__content-fav'><MdOutlineFavoriteBorder/></button></div></SwiperSlide>
                <SwiperSlide><div className='category__content'><Link className='catalog__content-link' to='/product'><img className='category__img' src={img3} alt="img"/></Link><p className='rec__name'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, vel?</p><button className='catalog__content-fav'><MdOutlineFavoriteBorder/></button></div></SwiperSlide>
                <SwiperSlide><div className='category__content'><Link className='catalog__content-link' to='/product'><img className='category__img' src={img4} alt="img"/></Link><p className='rec__name'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, vel?</p><button className='catalog__content-fav'><MdOutlineFavoriteBorder/></button></div></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Rec;