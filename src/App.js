import {db} from "./firebase/firebase";
import {collection, getDocs} from "@firebase/firestore";

import {Route, Routes} from 'react-router-dom'
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import Product from "./pages/Product/Product";
import Coat from "./pages/Clothes/Coat/Coat";
import Basket from "./pages/Basket/Basket";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Favorites from "./pages/Favorites/Favorites";
import {useEffect} from "react";
import axios from "axios";
import {useDispatch} from "react-redux";
import {getAll} from "./redux/reducers/clothes";
import {registerUser} from "./redux/reducers/user";
import AdminPanel from "./pages/adminPanel/AdminPanel";
import './app.scss'
import Contact from "./pages/Contact/Contact";




function App() {

  const dispatch = useDispatch()



  useEffect(() => {
    axios('https://alohadatabase.herokuapp.com/clothes').then(({data}) => dispatch(getAll({arr: data})))

    getDocs(collection(db,'users'))
        .then((res) => console.log('asdasd', res.docs.map(el => ({...el.data(), id:el.id}) )))
  }, []);

  useEffect(() => {
    if (localStorage.getItem('user') !== null){
      dispatch(registerUser({obj: JSON.parse(localStorage.getItem('user'))}))
    }

  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='' element={<Home/>}/>
          <Route path='catalog/:category' element={<Catalog/>}/>
          <Route path='product/:id' element={<Product/>}/>
          <Route path='coat' element={<Coat/>}/>
          <Route path='basket' element={<Basket/>}/>
          <Route path='profile' element={<Profile/>}/>
          <Route path='favorites' element={<Favorites/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='admin/*' element={<AdminPanel/>}/>
        </Route>
      {/*  <Route path='/auth' element={<Auth/>}/>*/}
      {/*  <Route path='/confirm' element={<Confirm/>}/>*/}
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
