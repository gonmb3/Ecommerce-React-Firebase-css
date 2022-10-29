import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login - register/Login';
import Register from './pages/login - register/Register';
import Cart from './pages/cart/Cart';
import ProductInfo from './pages/products/ProductInfo';
import Payment from './pages/paymentPage/Payment';

import { ToastContainer } from 'react-toastify';



const App = () => {

    

  return (
    <>
    <ToastContainer />
 { /* ----------- Routing ----------*/ }
    <Routes>
      <Route path="/" element={<ProtectedRoutes> <Home/> </ProtectedRoutes>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/productInfo/:id" element={<ProtectedRoutes> <ProductInfo/></ProtectedRoutes>}/>
      <Route path="/cart" element={<ProtectedRoutes> <Cart/> </ProtectedRoutes> }/>
      <Route path="/payment" element={ <ProtectedRoutes> <Payment/></ProtectedRoutes> }/>
    </Routes>
       
    </>
  )
}

export default App
                       { /*----- PROTECTED ROUTES ------*/ }
export const ProtectedRoutes = ({children}) =>{
        
    if(localStorage.getItem("currentUser")){
      return children
    }else{
    return  <Navigate to="/login"/>
    }
}