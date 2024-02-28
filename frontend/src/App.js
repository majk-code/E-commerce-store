import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Shop } from './Pages/Shop'
import { ShopCategory } from './Pages/ShopCategory';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
import InProgress from './Components/InProgress/InProgress';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Shop/>}/>
            <Route path='/fw2024' element={<ShopCategory category="fw2024"/>}/>
            <Route path="/product" element={<Product/>}>
              <Route path=":productId" element={<Product/>}/>
            </Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/login" element={<LoginSignup/>}></Route>
            <Route path='/inprogress' element={<InProgress/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
