import React, {useState} from 'react';
import {FreeMode, Navigation, Thumbs} from "swiper";
import img from "./img/Rectangle 10 (3).png";
import img1 from "./img/Rectangle 25.png";
import img2 from "./img/Rectangle 24.png";
import img3 from "./img/Rectangle 23.png";
import img4 from "./img/Rectangle 22.png";
import img5 from "./img/Rectangle 21.png";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
const ProductCard = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
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
                className="mySwiper2 nurik"
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
    );
};

export default ProductCard;