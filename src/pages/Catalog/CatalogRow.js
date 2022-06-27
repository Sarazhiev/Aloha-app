import React from 'react';
import {AnimatePresence, motion} from "framer-motion";
import {Link} from "react-router-dom";
import {animateScroll} from "react-scroll";
import img from "./img/1.png";
import BtnForFavorites from "../BtnForFavorites/BtnForFavorites";
import img2 from "../Favorites/empty.png";

const CatalogRow = ({clothes, sort, params, page, user, search}) => {
    return (
        <div className='catalog__content-row'>
            {
                clothes && clothes.filter((item) => item.title.toLowerCase().includes(search.toLowerCase())).length ?
                    clothes.filter((item) => item.title.toLowerCase().includes(search.toLowerCase())).filter((item, idx, array) => {
                        switch (params.category) {
                            case 'all' :
                                return item;
                            case 'new' :
                                return idx > array.length - 5;
                            case 'sale' :
                                return item.priceSale;
                            default:
                                return item.category === params.category
                        }
                    }).sort((a, b) => {
                        if (sort === 'big') {
                            return (b.price) - (a.price)
                        } else if (sort === 'less') {
                            return (a.price) - (b.price)
                        }
                    }).filter((item, idx) => idx + 1 <= page * 9 && idx  >= page * 9 - 9).map((item) => (
                        <React.Fragment key={item._id}>
                            <AnimatePresence   exitBeforeEnter onExitComplete presenceAffectsLayout>
                                <motion.div
                                    initial={{opacity: 0, y: 100, x: 100}}
                                    animate={{opacity: 1, y: 0, x: 0}}
                                    exit={{opacity: 0, y: -100, x: 100}}
                                    transition={{duration: 0.6}}
                                    className='catalog__content-card'>
                                    <Link onClick={() => animateScroll.scrollToTop({
                                        delay: 0,
                                        duration: 0
                                    })} className='catalog__content-link' to={`/product/${item._id}`}>
                                        <img className='catalog__content-img' src={`http://localhost:4444${item.images[0]}`} alt=""/>
                                    </Link>
                                    {
                                        user.email?.length || user.phoneNumber?.length ?
                                            <BtnForFavorites item={item}/>  : ''
                                    }
                                    <p className='catalog__content-name'>{item.title}</p>
                                    <p className='catalog__content-price'>{item.price} грн</p>
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

                    ))
                    : <div className='favorites__info'>
                        <h2 className='favorites__title'>Такого товара еще нет!</h2>
                        <img className='favorites__img' src={img2} alt=""/>
                    </div>
            }

        </div>
    );
};

export default CatalogRow;