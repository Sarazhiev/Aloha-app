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
                        {!loaded && <div style={{height:'800px', width: "100%", background:"gray"}}></div>}
                        <img src={`http://localhost:4444${url}`} alt={url} onLoad={() => setLoaded(true)}/>
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
                            {!loaded && <div style={{height:'200px', width: "102px", background:"gray"}}></div>}
                            <img src={`http://localhost:4444${url}`} alt={url} />
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
        </div>
    );
};

export default ProductCard;