import { Route, Routes } from 'react-router-dom'
import './App.css'
import { TestView } from './pages/TestView'
import { SurferHomePage } from './pages/SurferHomePage'
import { SurferProfileAccount } from './pages/SurferProfileAccount'
import { CartProvider } from './Hooks/cartContext'

function App() {
return (
  <>
    <CartProvider>
      <Routes>

        <Route path='/' element = {<SurferHomePage/>}>
        </Route>

        <Route path='/userProfile' element = {<SurferProfileAccount/>}>
        </Route>

        <Route path='/testView' element = {<TestView/>}>
        </Route>

      </Routes>
    </CartProvider>
  </>
)
}

export default App
