import {Autoplay, Keyboard, Mousewheel, Navigation} from "swiper";
import img1 from "../Category/Rectangle 7.png";
import {useSelector} from "react-redux";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Link} from "react-router-dom";
import React from "react";


const Slider = ({category, title, color}) => {
    const clothes = useSelector(s =>  s.clothes.clothes);
    return (
        <section>
            <div className="container">
                <h2 className='category__title'>{title}</h2>
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
                    {
                        clothes && clothes.filter((item) => item.category === category).map(item => (
                            <SwiperSlide key={item.id}>
                                <div className='category__content'>
                                    <Link className='catalog__content-link' to={`/product/${item.id}`}>
                                    <img className='category__img' src={img1} alt="img"/>
                                    </Link>
                                    <p style={{background: color }} className='category__text'>{item.title}</p>
                                </div>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>
        </section>
    );
};

export default Slider;