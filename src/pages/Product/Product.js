import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import Rec from "./Rec/Rec";
import {useDispatch, useSelector} from "react-redux";
import BtnForFavorites from "../BtnForFavorites/BtnForFavorites";
import ProductCard from "./ProductCard";
import ProductBtns from "./ProductBtns";
import ProductSize from "./ProductSize";

import axios from "../../axios";
import ProductSkeleton from "../../Components/Skeleton/ProductSkeleton";
import ProductRightSkeleton from "../../Components/Skeleton/ProductRightSkeleton";


const Product = () => {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState(false);
    const [color, setColor] = useState('');
    const [colors, setColors] = useState([]);
    const [size, setSize] = useState('');
    const params = useParams();
    const clothes = useSelector(s => s.clothes.clothes);
    const user = useSelector(s => s.user.user);
    const [count, setCount] = useState(1);
    const basket = useSelector(s => s.basket.basket);
    const dispatch = useDispatch();
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        axios(`/clothes/${params.id}`).then(({data}) => {
            setProduct(data);
            setIsLoading(true)
            setSize(data.sizes[0])
            setColor(data.colors)
            // setColors([data.colors])
        })

    }, [params]);



    return (

        <section className='product'>
            <div className="container">
                <div className="catalog__crumbs">
                    <Link className="catalog__link" to='/'>Главная</Link>
                    >
                    <Link className="catalog__link" to='/catalog/all'>Каталог</Link>
                    >
                    <span className="catalog__link">Product</span>
                </div>

                <div className='product__content' style={{minHeight: '630px'}}>
                    { isLoading  ? (
                            <ProductCard product={product} isLoading={isLoading}/>
                        ) : <ProductSkeleton/>
                    }
                    {   isLoading ?
                        product &&
                            <div className='product__right'>
                            <p className='product__title'>{product.title}</p>
                            <p className='product__price'>{product.priceSale
                                ? <>
                                    <span style={{textDecoration: 'line-through'}}>{product.price}</span>
                                    <span className='product__price-line'>-</span>
                                    <span className='product__price-sale'>{product.priceSale}</span>
                                </>
                                : product.price} сом</p>

                                {/*{*/}
                                {/*    colors.map(item => (*/}
                                {/*        <li key={item} onClick={() => setColor(item)}*/}
                                {/*            style={{background: item, border: '1px solid grey', cursor: 'pointer'}}*/}
                                {/*            className={`product__content-color ${item === color ? 'product__content-color_active' : ''}`}/>*/}
                                {/*    ))*/}
                                {/*}*/}
                                <ul style={{display: 'flex', columnGap: '10px'}}>
                                {
                                    clothes && product ? clothes.filter(item => item.title === product.title).map(item => (

                                            <li key={item._id} onClick={() => {
                                                setColor(item.colors)
                                                navigate(`/product/${item._id}`)
                                            }}
                                                style={{background: item.colors, border: '1px solid grey', cursor: 'pointer'}}
                                                className={`product__content-color ${item.colors === color ? 'product__content-color_active' : ''}`}/>

                                    )) : ''
                                }
                                </ul>
                            <ProductSize product={product} setSize={setSize} size={size}/>
                            {
                                product.inStock ?
                                    <p className='product__content-choose'>
                                        В наличии : <span>{product.inStock}</span>
                                    </p> :
                                    <p className='product__content-choose'>
                                        Нет в наличии !
                                    </p>
                            }
                            <ProductBtns item={product} basket={basket} color={color} dispatch={dispatch} count={count}
                                         setCount={setCount} size={size}/>
                            {
                                user.email?.length || user.phoneNumber?.length ?
                                    <BtnForFavorites product={true} item={product}/> : ''
                            }

                            <p className='product__save' onClick={() => setIsActive(!isActive)}>
                                Состав и уход
                                {
                                    isActive ?

                                        <svg width="10" height="5" viewBox="0 0 10 5" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M4.52189 4.80888L0.698002 1.11512C0.434006 0.860095 0.433995 0.44661 0.697994 0.191586C0.961993 -0.0634387 1.39003 -0.0634287 1.65402 0.191593L4.99983 3.42366L8.34597 0.191264C8.60997 -0.0637608 9.038 -0.0637508 9.302 0.191271C9.566 0.446293 9.566 0.859778 9.30201 1.1148L5.49346 4.79388C5.48845 4.79904 5.48314 4.80385 5.47792 4.80889C5.24693 5.03171 4.89016 5.05981 4.62792 4.89255C4.59042 4.86862 4.5549 4.84077 4.52189 4.80888Z"
                                                fill="#363A45"/>
                                        </svg>
                                        :
                                        <svg width="10" height="5" viewBox="0 0 10 5" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M4.52189 0.191117L0.698002 3.88488C0.434006 4.13991 0.433995 4.55339 0.697994 4.80841C0.961993 5.06344 1.39003 5.06343 1.65402 4.80841L4.99983 1.57634L8.34597 4.80874C8.60997 5.06376 9.038 5.06375 9.302 4.80873C9.566 4.55371 9.566 4.14022 9.30201 3.8852L5.49346 0.206122C5.48845 0.200956 5.48314 0.196155 5.47792 0.19111C5.24693 -0.0317101 4.89016 -0.0598059 4.62792 0.107452C4.59042 0.131378 4.5549 0.159229 4.52189 0.191117Z"
                                                fill="#363A45"/>
                                        </svg>

                                }

                                {
                                    isActive &&
                                    <ul className='product__descr'>
                                        <li className='product__safe product__safe1'>Состав: 50% Шерсть, 50%
                                            Полиэстер
                                        </li>
                                        <li className='product__safe'>Подкладка: 100% Полиэстер</li>
                                        <li className='product__safe'>Утеплитель: 90% Пух, 10% Перо</li>
                                        <br/>
                                        <li className='product__safe'>- Не стирать</li>
                                        <li className='product__safe'>- Гладить при температуре утюга до 110°C</li>
                                        <li className='product__safe'>- Не отбеливать</li>
                                        <li className='product__safe'>- Сухая чистка (химчистка)</li>
                                        <li className='product__safe'>- Барабанная сушка запрещена</li>
                                    </ul>
                                }
                            </p>
                        </div>
                        : <ProductRightSkeleton/>

                    }

                </div>
                <Rec/>

            </div>
        </section>
    );
};

export default Product;