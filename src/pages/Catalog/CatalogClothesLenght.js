import React from 'react';

const CatalogClothesLenght = ({clothes, page, params}) => {
    return (
        <p>показано {clothes.filter((item, idx, array) => {
            switch (params.category) {
                case 'all' :
                    return item;
                case 'new' :
                    return idx > array.length - 5;
                case 'sale' :
                    return item.priceSale;
                case 'man' :
                    return item.gender === 'man';
                case 'woman' :
                    return item.gender === 'woman';
                default:
                    return item.category === params.category
            }
        }).filter((item, idx) => idx + 1 <= page * 9 && idx >= page * 9 - 9).length} из {clothes.filter((item, idx, array) => {
            switch (params.category) {
                case 'all' :
                    return item;
                case 'new' :
                    return idx > array.length - 5;
                case 'sale' :
                    return item.priceSale;
                case 'man' :
                    return item.gender === 'man';
                case 'woman' :
                    return item.gender === 'woman';
                default:
                    return item.category === params.category
            }
        }).length}</p>
    );
};

export default CatalogClothesLenght;