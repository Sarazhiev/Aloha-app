import React from 'react';

const ProductColors = ({item, setColor, color}) => {
    return (
        <ul className='product__content-sizes'>
            {
                item.colors.map(item => (
                    <li key={item} onClick={() => setColor(item)}
                        style={{background: item, border: '1px solid grey', cursor: 'pointer'}}
                        className={`product__content-color ${item === color ? 'product__content-color_active' : ''}`}/>
                ))
            }
        </ul>
    );
};

export default ProductColors;