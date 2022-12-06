
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { FaTrashAlt } from "react-icons/fa"
import { HiArrowCircleLeft } from "react-icons/hi"

import "../../styles/products.css"
import Layout from './../../components/layout/Layout';


import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import CartSlider from './CartSlider';
const MySwal = withReactContent(Swal);



const Cart = () => {

  const { cartItems } = useSelector(state => state.cartReducer); /*redux*/
  const dispatch = useDispatch();

  /* CANTIDAD TOTAL DEL CARRO DE COMPRAS $$ */
  const [totalAmount, setTotalAmount] = useState(0)
  useEffect(() => {
    let temp = 0;
    cartItems.forEach(cartItem => {
      temp = temp + cartItem.price
    })
    setTotalAmount(temp)
  }, [cartItems]);



  /*LOCALSTORAGE*/
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
  }, [cartItems]);


  /*FUNCION ELIMINAR PRODUCTO DEL CARRITO*/
  const deleteFromCart = (product) => {
    dispatch({ type: "DELETE_FROM_CART", payload: product })
  }
  
  /*CONFIRMACION SWEETALERT*/
  const confirmDelete = (id) => {
    Swal.fire({
      title: 'Eliminar Producto?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: "Cancelar!",
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteFromCart(id)  /*ELIMINAR PRODUCTO DEL CARRITO CON ALERTA */
        Swal.fire(
          'Eliminado Correctamente!',
        )
      }
    })
  }



  return (
    <Layout>
      <h3 className='text-center my-3 text-primary'>Tu Carrito de Compras</h3>
      {cartItems.length > 0 ? (
        <>

          <table className='table my-3 p-5'>

            <thead>
              <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>{" "}</th>
              </tr>
            </thead>

            <tbody>
              {cartItems.map(item => (
                <tr>
                  <td> <img src={item.image} alt={item.title} height="80" width="80" /> </td>
                  <td>{item.title.slice(0, 22)} </td>
                  <td>$ {item.price}</td>
                  <td>
                    <FaTrashAlt
                      onClick={() => confirmDelete(item)}  /* Función eliminar del carro de compras */
                      size={19}
                      className='delete-icon' />
                  </td>
                </tr>


              ))}
            </tbody>

          </table>

          <div className="d-flex justify-content-between ">
            <Link to="/">  <button className='btn btn-secondary btn-arrow mx-2'><HiArrowCircleLeft size={32} /> Seguir Comprando </button></Link>
            <div className="d-flex flex-column text-end">
              <div className="d-flex flex-column ">
                <h2 className="total-amount bg-primary  fw-light">Total a Pagar: ${Math.ceil(totalAmount)}.00 </h2>
               
                  <button className='btn btn-success mx-1'>
                    Finalizar Compra
                  </button>
              
              </div>

            </div>

          </div>
          <div className="">
                  
                    {/*  <CartSlider />*/}
          </div>




        </>


      ) : (
        <div className='text-center'>
          <h3>No hay productos </h3>
          <Link to="/">  <button className='btn btn-primary my-3 '>Empieza a Comprar </button></Link>

          <div className="">
            <CartSlider />
          </div>
        </div>
      )}


    </Layout>
  )
}

export default Cart