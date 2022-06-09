import React from 'react';
import New from "./New/New";
import Category from "./Category/Category";
import First from "./First/First";
import NewClothes from "./NewsClothes/NewClothes";
import Slider from "./Slider/Slider";


const Home = () => {
    return (
        <main>
            <New/>
            <Category/>
            <NewClothes/>
            <Slider delay={2500} color={'rgba(194, 190, 162, 0.75)'} category={'tshort'} title='футболки'/>
            <Slider delay={3000} color={'rgba(324, 180, 122, 0.95)'} category={'sportsuit'} title='Спортивки'/>
            <Slider delay={2500} color={'rgba(424, 170, 152, 0.99)'} category={'hoody'} title='Худи'/>
            <Slider delay={3000} color={'rgba(524, 200, 162, 0.95)'} category={'sweatshirt'} title='Свитшоты'/>
            <First/>
        </main>
    );
};

export default Home;