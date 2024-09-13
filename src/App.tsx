import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import ProductListing from './Components/ProductListing'
import ProductDetails from './Components/ProductDetails'
import Breadcrumb from './Components/Breadcrumb'

function App() {

  return (
    <>
      <BrowserRouter>
        <Breadcrumb />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/products' element={<ProductListing />}></Route>
          <Route path='/products/:id' element={<ProductDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
