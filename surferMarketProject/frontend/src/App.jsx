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
import { SurferHeader } from './components/SurferHeader';
import { SurferFooter } from './components/SurferFooter';
import { AuthProvider, useAuth } from './components/authContext';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <SurferHeader />
        <Routes>
          <Route path='/' element={<SurferHomePage />} />
          <Route path='/userProfile' element={<PrivateRoute><SurferProfileAccount /></PrivateRoute>} />
          <Route path='/testView' element={<TestView />} />
          <Route path='/MarketPlace' element={<MarketPlace />} />
          <Route path='/add-product' element={<TestView />} />
          <Route path='/sell_products' element={<ProductForm />} />
          <Route path='/noticias' element={<Noticias />} />
          <Route path='/cart' element={<CartView />} />
          <Route path='/login' element={<SurferLoginView />} />
        </Routes>
        <SurferFooter />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
