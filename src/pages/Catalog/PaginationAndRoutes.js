import React from 'react';
import {Pagination} from "antd";

const PaginationAndRoutes = ({clothes, setPage, page, params}) => {
    return (
        <>
            {
                clothes.filter((item, idx, array) => {
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
                    <Pagination onChange={setPage} simple Current={page} total={clothes.filter((item, idx, array) => {
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