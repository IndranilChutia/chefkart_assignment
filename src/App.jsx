import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Ingredients from './Pages/Ingredients/Ingredients'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/ingredients/:id' element={<Ingredients/>} />
    </Routes>
  )
}

export default App
