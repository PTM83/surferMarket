import { Route, Routes } from 'react-router-dom';
import './App.css';
import { TestView } from './pages/TestView';
import { SurferHomePage } from './pages/SurferHomePage';
import { SurferProfileAccount } from './pages/SurferProfileAccount';
import { MarketPlace } from './pages/MarketPlace';
import Noticias from './components/Noticias';
import CartView from './pages/CartView';
import { CartProvider } from './components/cartContext';
import { SurferLoginView } from './pages/SurferLoginView';
import { ProductForm } from './components/ProductForm';
import UserProfile from './pages/UserProfile';  // Importa el nuevo componente
// otros imports...

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path='/' element={<SurferHomePage />} />
        <Route path='/userProfile' element={<UserProfile />} />
        <Route path='/testView' element={<TestView />} />
        <Route path='/MarketPlace' element={<MarketPlace />} />
        <Route path='/add-product' element={<TestView />} />
        <Route path='/sell_products' element={<ProductForm />} />
        <Route path='/noticias' element={<Noticias />} />
        <Route path='/cart' element={<CartView />} />
        <Route path='/login' element={<SurferLoginView />} />
        
      </Routes>
    </CartProvider>
  );
}

export default App;
