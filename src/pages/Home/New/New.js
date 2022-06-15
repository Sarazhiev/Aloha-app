import React from 'react';
import {GoChevronRight} from 'react-icons/go'
import {Link} from "react-router-dom";
import {animateScroll} from "react-scroll";

const New = () => {
    return (
        <section className='new'>
            <div className="container">
                <h2 className='new__title'>Новая коллекция</h2>

                    <Link onClick={() => animateScroll.scrollToTop({
                        delay: 0,
                        duration: 0
                    })} className='new__subtitle' to='/catalog/new'>Смотреть Новинки <GoChevronRight/></Link>

            </div>
        </section>
    );
};

export default New;