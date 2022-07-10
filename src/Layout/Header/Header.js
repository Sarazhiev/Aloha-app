import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import HeaderList from "./HeaderList";
import Gotop from "./Gotop";
import Burger from "./Burger";
import HeaderRight from "./HeaderRight";
import logo from './asd.jpg'

const Header = () => {
    const user = useSelector((s) => s.user.user);
    const [burger, setBurger] = useState(false);

    return (
        <header id='header' className='header'>
            <div className="container">
                <nav className='header__nav'>
                    <Burger burger={burger} setBurger={setBurger}/>
                    <div className='header__sides'>
                        <div className='header__nav-left'>
                            <Link to='/'>
                                <img src={logo} alt=""/>

                            </Link>
                        </div>
                        <HeaderRight user={user}/>
                    </div>
                    <HeaderList burger={burger} user={user}/>
                </nav>
            </div>
            <Gotop/>
        </header>
    );
};

export default Header;