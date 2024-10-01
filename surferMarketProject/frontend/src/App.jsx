import { Route, Routes } from 'react-router-dom'
import './App.css'
import { TestView } from './pages/TestView'
import { SurferHomePage } from './pages/SurferHomePage'

function App() {
return (
  <>
    <Routes>

    <Route path='/' element = {<SurferHomePage/>}>
    </Route>

    <Route path='/testView' element = {<TestView/>}>
    </Route>

    </Routes>
  </>
)
}

export default App
