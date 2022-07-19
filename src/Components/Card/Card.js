import React, {useState} from 'react';
import {AnimatePresence, motion} from "framer-motion";
import {Link} from "react-router-dom";
import {animateScroll} from "react-scroll";
import img from "../../pages/Catalog/img/1.png";
import BtnForFavorites from "../../pages/BtnForFavorites/BtnForFavorites";

const Card = ({item, user}) => {
    const [changeImg, setChangeImg] = useState(0)
    return (
        <React.Fragment key={item._id}>
            <AnimatePresence   exitBeforeEnter onExitComplete presenceAffectsLayout>
                <motion.div
                    onMouseOver={() => setChangeImg(1)} onMouseOut={() => setChangeImg(0)}
                    initial={{opacity: 0, y: 100, x: 100}}
                    animate={{opacity: 1, y: 0, x: 0}}
                    exit={{opacity: 0, y: -100, x: 100}}
                    transition={{duration: 0.6}}
                    className='catalog__content-card'>
                    <Link onClick={() => animateScroll.scrollToTop({
                        delay: 0,
                        duration: 0
                    })} className='catalog__content-link' to={`/product/${item._id}`}>
                        <img  className='catalog__content-img' src={changeImg ? `https://aloha.yngai.store${item.images[0]}` : `http://87.236.22.119:4444${item.images[1]}`} alt=""/>
                    </Link>
                    {
                        user.email?.length || user.phoneNumber?.length ?
                            <BtnForFavorites item={item}/>  : ''
                    }
                    <p className='catalog__content-name'>{item.title}</p>
                    <p className='catalog__content-price'>{item.price} сом</p>
                    <ul className='catalog__content-sizes'>
                        {
                            item.sizes.map((size) => (
                                <li key={size} className='catalog__content-size'>{size}</li>
                            ))
                        }
                    </ul>
                    <ul className='catalog__content-colors'>
                        <li  style={{background: item.colors, border: item.colors === 'white' ? '0.1px solid grey' : ''}}
                             className='catalog__content-circle'> </li>
                    </ul>
                </motion.div>
            </AnimatePresence>
        </React.Fragment>
    );
};

export default Card;