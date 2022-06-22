import React, {useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {GoChevronRight} from 'react-icons/go'
import {useSelector} from "react-redux";
import 'antd/dist/antd.css';
import CatalogList from "./CatalogList";
import CatalogRight from "./CatalogRight";
import PaginationAndRoutes from "./PaginationAndRoutes";



const Catalog = () => {


    const clothes = useSelector(s => s.clothes.clothes);
    const [page, setPage] = useState(1);

    const params = useParams();


    return (
        <section className='catalog'>
            <div className="container">
                <div className="catalog__crumbs">
                    <Link className="catalog__link" to='/'>Главная</Link>
                    <GoChevronRight/>
                    <span className="catalog__link">Каталог</span>
                </div>
                <div className='catalog__content'>
                    <div className='catalog__content-left'>
                        <h3 className='catalog__content-title'>Каталог</h3>
                        <CatalogList clothes={clothes}/>
                    </div>
                    <CatalogRight clothes={clothes} page={page} params={params}/>
                </div>


                <PaginationAndRoutes clothes={clothes} setPage={setPage} params={params} page={page}/>

            </div>

        </section>
    );
};

export default Catalog;