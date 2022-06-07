import React from 'react';
import {GoChevronRight} from 'react-icons/go'

const New = () => {
    return (
        <section className='new'>
            <div className="container">
                <h2 className='new__title'>Новая коллекция</h2>
                <p className='new__subtitle'>Смотреть Новинки <GoChevronRight/></p>
            </div>
        </section>
    );
};

export default New;