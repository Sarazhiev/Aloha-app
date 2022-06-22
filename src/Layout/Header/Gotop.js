import React, {useEffect, useState} from 'react';
import {ImArrowUp} from 'react-icons/im'

const Gotop = () => {
    const [y, setY] = useState(0);
    const handleNavigation = (e) => {
        const window = e.currentTarget;
        if (200 < window.scrollY) {
            setY(1)
        } else {
            setY(0)
        }
    };
    useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", (e) => handleNavigation(e));
    }, []);
    return (
        <a href="#header" className={`goTop ${y ? 'goTop_active' : ''}`}>
            <ImArrowUp/>
        </a>
    );
};

export default Gotop;