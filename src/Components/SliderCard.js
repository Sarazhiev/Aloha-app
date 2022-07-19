import React, {useState} from 'react';
import {animateScroll} from "react-scroll";
import img from "../pages/Catalog/img/1.png";
import {Link} from "react-router-dom";

const SliderCard = ({item}) => {
    const [changeImg, setChangeImg] = useState(0)
    return (
        <Link onMouseOver={() => setChangeImg(1)} onMouseOut={() => setChangeImg(0)} onClick={() => animateScroll.scrollToTop({
            delay: 0,
            duration: 0
        })} className='catalog__content-link' to={`/product/${item._id}`}>
            <img className='category__img' src={changeImg ? `https://aloha.yngai.store${item.images[0]}` : `https://aloha.yngai.store${item.images[1]}`} alt="img"/>
        </Link>
    );
};

export default SliderCard;