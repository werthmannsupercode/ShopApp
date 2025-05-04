//import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { LoginSignup } from './Pages/LoginSignup';
import { Shop } from './Pages/Shop';
import { ShopCategory } from './Pages/ShopCategory';
import { Cart } from './Pages/Cart';
import { Product } from './Pages/Product';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/briefkaesten' element={<ShopCategory category="briefkasten"/>}/>
        <Route path='/tabletts' element={<ShopCategory category="tablett"/>}/>
        <Route path='/blumenkaesten' element={<ShopCategory category="blumenkasten"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
