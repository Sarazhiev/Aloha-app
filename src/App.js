
import {Route, Routes} from 'react-router-dom'
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import Product from "./pages/Product/Product";
import Basket from "./pages/Basket/Basket";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Favorites from "./pages/Favorites/Favorites";
import {useEffect} from "react";
import axios from "./axios";
import {useDispatch, useSelector} from "react-redux";
import {getAll} from "./redux/reducers/clothes";
import {registerUser} from "./redux/reducers/user";
import AdminPanel from "./pages/adminPanel/AdminPanel";
import './app.scss'
import Contact from "./pages/Contact/Contact";
import PhoneNumber from "./pages/RegisterWithNumber/PhoneNumber";
import {getFromLocalStorage} from './redux/reducers/basket'
import NotFound from "./pages/NotFound/NotFound";




function App() {

  const dispatch = useDispatch();
  const basket = useSelector(s => s.basket.basket);



  useEffect(() => {
     axios('/clothes').then(({data}) => dispatch(getAll({arr: data})))

  }, []);

  useEffect(() => {
    if (localStorage.getItem('user') !== null){
      dispatch(registerUser({obj: JSON.parse(localStorage.getItem('user'))}))
    }

    if (localStorage.getItem('basket') !== null){
      dispatch(getFromLocalStorage({arr: JSON.parse(localStorage.getItem('basket'))}))
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basket))
  },[basket]);
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='' element={<Home/>}/>
          <Route path='catalog/:category' element={<Catalog/>}/>
          <Route path='product/:id' element={<Product/>}/>
          <Route path='basket' element={<Basket/>}/>
          <Route path='profile' element={<Profile/>}/>
          <Route path='favorites' element={<Favorites/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='admin/*' element={<AdminPanel/>}/>
        </Route>
        <Route path='/number' element={<PhoneNumber/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
