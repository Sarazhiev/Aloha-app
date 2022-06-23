import React from 'react';
import {useSelector} from "react-redux";
import NewClothesSlider from "./NewClothesSlider";

const NewClothes = () => {
    const clothes = useSelector(s =>  s.clothes.clothes);
    return (
        <section>
            <div className="container">
                <h2 className='category__title'>Новое поступление</h2>
                <NewClothesSlider clothes={clothes}/>
            </div>
        </section>
    );
};

export default NewClothes;