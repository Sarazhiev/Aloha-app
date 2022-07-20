import React from 'react';
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";

const CatalogClothesLenght = ({clothes, page, params}) => {
    const status = useSelector(s => s.clothes.status)



    return (
        <p style={{marginTop: '10px'}}>показано {clothes.filter((item) => {
            switch (status){
                case 'man':
                    return item.gender === 'man' || item.gender === 'uni'
                case 'woman':
                    return item.gender === 'woman' || item.gender === 'uni'
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
                case 'man' :
                    return item.gender === 'man' || item.gender === 'uni'
                case 'woman' :
                    return item.gender === 'woman' || item.gender === 'uni'
                default:
                    return item.category === params.category
            }
        }).filter((item, idx) => idx + 1 <= page * 9 && idx >= page * 9 - 9).length} из {clothes.filter((item) => {
            switch (status){
                case 'man':
                    return item.gender === 'man' || item.gender === 'uni'
                case 'woman':
                    return item.gender === 'woman' || item.gender === 'uni'
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
                case 'man' :
                    return item.gender === 'man' || item.gender === 'uni'
                case 'woman' :
                    return item.gender === 'woman' || item.gender === 'uni'
                default:
                    return item.category === params.category
            }
        }).length}</p>
    );
};

export default CatalogClothesLenght;