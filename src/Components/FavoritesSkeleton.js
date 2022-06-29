import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';


const FavoritesSkeleton = () => {
    return (
        <Stack spacing={1}>
            <Skeleton variant="rectangular" width={370} height={400} />
            <Skeleton variant="text" width={100} />
            <Skeleton variant="text" width={70} />
            <Skeleton variant="text" width={100} />
            <div style={{display:'flex', columnGap: '10px'}}>
                <Skeleton variant="circular" width={14} height={14} />
                <Skeleton variant="circular" width={14} height={14} />
                <Skeleton variant="circular" width={14} height={14} />
            </div>
        </Stack>
    );
};

export default FavoritesSkeleton;
