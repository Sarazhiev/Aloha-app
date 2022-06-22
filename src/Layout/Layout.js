import React from 'react';
import {Outlet, useLocation} from "react-router-dom"
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = () => {
    const location = useLocation();

    return (
        <div>
            <Header/>
            <Outlet/>
            {!location.pathname.includes('/admin') &&  <Footer/>  }
        </div>
    );
};

export default Layout;