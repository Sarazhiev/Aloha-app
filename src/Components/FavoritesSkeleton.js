import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';


const FavoritesSkeleton = () => {
    return (
        <Stack spacing={1}>
           <div style={{display: 'flex', columnGap: '10px'}}>
               <Skeleton variant="rectangular" width={550} height={825} style={{background: 'darkgrey'}} />
               <div style={{display:'flex', flexDirection: 'column'}}>
                   <Skeleton variant="text" width={102} height={153} style={{background: 'darkgrey'}} />
                   <Skeleton variant="text" width={102} height={153} style={{background: 'darkgrey'}} />
                   <Skeleton variant="text" width={102} height={153} style={{background: 'darkgrey'}} />
                   <Skeleton variant="text" width={102} height={153} style={{background: 'darkgrey'}} />
                   <Skeleton variant="text" width={102} height={153} style={{background: 'darkgrey'}} />
               </div>
           </div>
        </Stack>
    );
};

export default FavoritesSkeleton;
