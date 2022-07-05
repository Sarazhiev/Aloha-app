import React from 'react';
import {Pagination} from "antd";
import {useSelector} from "react-redux";

const PaginationAndRoutes = ({clothes, setPage, page, params}) => {
    const status = useSelector(s => s.clothes.status)
    return (
        <>
            {
                clothes.filter((item) => {
                    switch (status){
                        case 'man':
                            return item.gender === 'man'
                        case 'woman':
                            return item.gender === 'woman'
                        default :
                            return item
                    }
                }).filter((item, idx, array) => {
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
                }).length > 9 ?
                    <Pagination onChange={setPage} simple Current={page} total={clothes.filter((item) => {
                        switch (status){
                            case 'man':
                                return item.gender === 'man'
                            case 'woman':
                                return item.gender === 'woman'
                            default :
                                return item
                        }
                    }).filter((item, idx, array) => {
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
                    }).length} pageSize={9} /> : ''
            }
        </>
    );
};

export default PaginationAndRoutes;