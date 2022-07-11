import React from 'react';
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const ProductRightSkeleton = () => {
    return (
        <Stack spacing={1}>
            <div className='product__right'>
                <Skeleton className='product__title' variant="rectangular" width={400} height={40} style={{background: 'silver'}}/>
                <Skeleton className='product__price' variant="rectangular" width={300} height={40} style={{background: 'silver'}}/>
                <div className='product__content-sizes' style={{display: "flex", columnGap: '15px', margin: '30px 0 10px'}}>
                    <Skeleton   variant="rectangular" width={41} height={41} style={{background: 'silver'}}/>
                    <Skeleton   variant="rectangular" width={41} height={41} style={{background: 'silver'}}/>
                    <Skeleton   variant="rectangular" width={41} height={41} style={{background: 'silver'}}/>
                </div>
                <Skeleton className='product__content-choose' variant="rectangular" width={150} height={30} style={{background: 'silver', marginBottom: '10px'}}/>
                <div style={{display: "flex", columnGap: '10px', marginBottom: '10px'}}>
                    <Skeleton variant="rectangular" width={50} height={50} style={{background: 'silver'}}/>
                    <Skeleton variant="rectangular" width={255} height={50} style={{background: 'silver'}}/>
                </div>
                <Skeleton variant="rectangular" width={315} height={50} style={{background: 'silver'}}/>
            </div>
        </Stack>
    );
};

export default ProductRightSkeleton;