import React from 'react';
import {Outlet, useLocation} from "react-router-dom"
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = () => {

    const location = useLocation()

    console.log(location)

    return (
        <div>
            <Header/>

            <Outlet/>

            {!location.pathname.includes('/admin') &&  <Footer/>  }

        </div>
    );
};

export default Layout;