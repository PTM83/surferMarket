// src/App.jsx

import { Route, Routes } from 'react-router-dom';
import './App.css';
import { TestView } from './pages/TestView';
import { SurferHomePage } from './pages/SurferHomePage';
import { SurferProfileAccount } from './pages/SurferProfileAccount';
import { MarketPlace } from './pages/MarketPlace';
import Noticias from './components/Noticias';
// import ProductForm from './components/ProductForm';
import CartView from './pages/CartView'; // Importa tu nuevo componente
import { CartProvider } from './Hooks/cartContext';
// import ProductProvider from './Context/ProductProvider';


function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path='/' element={<SurferHomePage />} />
        <Route path='/userProfile' element={<SurferProfileAccount />} />
        <Route path='/testView' element={<TestView />} />
        <Route path='/MarketPlace' element={<MarketPlace />} />
        <Route path='/add-product' element={<TestView />} />
        <Route path='/noticias' element={<Noticias />} />
        <Route path='/cart' element={<CartView />} /> {/* Ruta del carrito */}
      </Routes>
    </CartProvider>
  );
}

export default App;
