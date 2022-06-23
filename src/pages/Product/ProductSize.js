import React from 'react';

const ProductSize = ({item, setSize, size}) => {
    return (
        <ul style={{marginTop: '40px'}} className='product__content-sizes'>
            {
                item.size.map(item => (
                    <li key={item} onClick={() => setSize(item)}
                        className={`product__content-size ${item === size ? 'product__content-size_active' : ''} `}>{item}</li>
                ))
            }
        </ul>
    );
};

export default ProductSize;