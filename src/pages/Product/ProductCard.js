import React, {useState} from 'react';
import {FreeMode, Navigation, Thumbs} from "swiper";
import img from "./img/Rectangle 10 (3).png";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
const  ProductCard = ({product}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [loaded, setLoaded] = useState(false)


    return (
        <div className='product__card'>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={50}
                thumbs={{swiper: thumbsSwiper}}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2 nurik"
            >
                {product.images.filter((url) => url.length).map((url, idx) => (
                    <SwiperSlide key={idx}>
                        {!loaded && <div style={{height:'800px', width: "100%", background:"silver"}}></div>}
                        <img src={`http://87.236.22.119:4444${url}`} alt={url} onLoad={() => setLoaded(true)}/>
                    </SwiperSlide>

                ))}
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
                <div className='swiper__opacity'>
                    {product.images.filter((url) => url.length).map((url, idx) => (
                        <SwiperSlide key={idx}>
                            {!loaded && <div style={{height:'200px', width: "102px", background:"silver"}}> </div>}
                            <img src={`http://87.236.22.119:4444${url}`} alt={url} onLoad={() => setLoaded(true)}/>
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
        </div>
    );
};

export default ProductCard;