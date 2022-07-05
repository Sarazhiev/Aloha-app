import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';


const FavoritesSkeleton = () => {
    return (
        <Stack spacing={1} >
            <div  className='product__right'>
                <div className='catalog__content-card'>
                    <Skeleton  variant="rectangular" width={355} height={532} style={{background: 'darkgrey', marginBottom: '10px'}} />
                    <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', rowGap: '5px'}}>
                        <Skeleton variant="text" width={200} height={20} style={{background: 'darkgrey'}} />
                        <Skeleton variant="text" width={200} height={20} style={{background: 'darkgrey'}} />
                        <Skeleton variant="text" width={200} height={20} style={{background: 'darkgrey'}} />
                    </div>
                </div>
                <div className='catalog__content-card'>
                    <Skeleton  variant="rectangular" width={355} height={532} style={{background: 'darkgrey', marginBottom: '10px'}} />
                    <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', rowGap: '5px'}}>
                        <Skeleton variant="text" width={200} height={20} style={{background: 'darkgrey'}} />
                        <Skeleton variant="text" width={200} height={20} style={{background: 'darkgrey'}} />
                        <Skeleton variant="text" width={200} height={20} style={{background: 'darkgrey'}} />
                    </div>
                </div>
                <div className='catalog__content-card'>
                    <Skeleton  variant="rectangular" width={355} height={532} style={{background: 'darkgrey', marginBottom: '10px'}} />
                    <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', rowGap: '5px'}}>
                        <Skeleton variant="text" width={200} height={20} style={{background: 'darkgrey'}} />
                        <Skeleton variant="text" width={200} height={20} style={{background: 'darkgrey'}} />
                        <Skeleton variant="text" width={200} height={20} style={{background: 'darkgrey'}} />
                    </div>
                </div>
            </div>

        </Stack>
    );
};

export default FavoritesSkeleton;
