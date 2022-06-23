import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {useSelector} from "react-redux";
import CategorySlider from "./CategorySlider";

const Category = () => {

    const clothes = useSelector(s => s.clothes.clothes.filter((item, idx, arr) => arr.map(el => el.category).indexOf(item.category) === idx))

    return (

        <section className='category'>
            <div className="container">
                <h2 className='category__title'>Категории</h2>
                <CategorySlider clothes={clothes}/>
            </div>
        </section>
    );
};

export default Category;