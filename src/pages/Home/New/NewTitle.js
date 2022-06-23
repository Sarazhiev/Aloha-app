import React from 'react';
import Skeleton from "react-loading-skeleton";

const NewTitle = ({post}) => {
    return (
        <h2 className='new__title'>{post.title || <Skeleton/>}</h2>
    );
};

export default NewTitle;