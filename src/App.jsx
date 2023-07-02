import { Navigate, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Home from './Pages/Home'
import CategoryProduct from './Pages/CategoryProduct'
import Page404 from './Pages/Page404'
import Navigationbar from './Components/Navigationbar'
import Footer from './Components/Footer'
import Product from './Pages/Product'
import AllProductsPage from './Pages/AllProductsPage'
import Searching from './Components/Searching'
import SingleCategorySection from './Components/SingleCategorySection'
import Cart from './Pages/Cart'
  

function App() {
  const [user,setuser] = useState(true)

  return (
    <>
    <Searching/>
    <Navigationbar/>
    
    {user ? 
    (<Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/cart' element = {<Cart/>}/>
      <Route path='/products/category/:categoryName' element = {<CategoryProduct/>}/>
      <Route path='/products' element = {<AllProductsPage/>}/>
      <Route path="/categories/" component={<SingleCategorySection/>} />
      <Route path='/products/:ProductID' element = {<Product/>}/>
      <Route path='*' element = {<Page404/>}/>
    </Routes>
    ) 
    : (
    <Routes>
      <Route path='/login' element = {<Login/>}/>
      <Route path='/signup' element = {<SignUp/>}/>
      <Route path='/' element = {<Home/>}/>
      <Route path='*' element = {<Navigate to = "/login" replace={true}/>}/>
    </Routes>
    )
    }
    <Footer/>
    </>
  )
}
export default App