import './app.scss'
import {Route, Routes} from 'react-router-dom'
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import Product from "./pages/Product/Product";
import Clothes from "./pages/Clothes/Clothes";
import Coat from "./pages/Clothes/Coat/Coat";
import Basket from "./pages/Basket/Basket";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Favorites from "./pages/Favorites/Favorites";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='' element={<Home/>}/>
          <Route path='catalog' element={<Catalog/>}/>
          <Route path='product' element={<Product/>}/>
          <Route path='coat' element={<Coat/>}/>
          <Route path='basket' element={<Basket/>}/>
          <Route path='profile' element={<Profile/>}/>
          <Route path='favorites' element={<Favorites/>}/>
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
