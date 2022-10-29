import { useState, useEffect } from 'react';

import { addDoc, collection, getDocs } from "firebase/firestore";
import fireDB from '../../firebaseConfig/firebase';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import Layout from './../../components/layout/Layout';
import bannerImg2 from "../../assets/img/storeBanner2.jpeg"
import "../../styles/products.css"
import { fireProducts } from './../../firebaseConfig/fireProducts';


const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { cartItems } = useSelector(state => state.cartReducer)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /*OBTENER DATA DE FIREBASE*/
  const getData = async () => {
    try {
      setLoading(true); /*Loader component*/

      const products = await getDocs(collection(fireDB, "products"))
      const productsArray = [];
      products.forEach((doc) => {
        const obj = {
          id: doc.id,
          ...doc.data()
        }
        productsArray.push(obj)
      });
      setLoading(false);
      setProducts(productsArray);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  useEffect(() => {
    getData();
  }, []);



  useEffect(() => {      /* LOCALSTORAGE */
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
  }, [cartItems]);

  /*AGREGAR AL CARRITO FUNCIÓN*/
  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product })
  }



  return (
    <Layout loading={loading} >
      <img className="d-block w-100 banner-img" src={bannerImg2} alt="First slide" />
      <div className="container products-container">
        <h3 className=' text-white align-items-center p-3  py-2 rounded-5 d-inline-block fw-light bg-primary'>Productos</h3>

       

        <div className="row py-3">
          { /*Iterando productos de firebase */}
          {products.map((product, index) => (
            <div key={product.id} className="col-md-4 col-sm-12 col">
              <div className="my-2  product" >

                <div className="product-content">
                  <p>{product.title.slice(0, 23)}</p>
                  <div className="text-center">
                    <img src={product.image} alt={product.title} className="product-img" />
                  </div>
                </div>

                <div className="product-actions">
                  { /*Funcion agregar producto al carro de compras*/}
                  <h2>${Math.ceil(product.price)}.00 </h2>
                  <p className='text-secondary'>{product.description.slice(0, 37)}..... </p>

                  <div className="d-flex ">
                    <button
                      onClick={() => addToCart(product)}
                      className='btn btn-outline-primary mx-2'>
                      Agregar al carrito
                    </button>

                    { /*Funcion navegar a los detalles del producto*/}
                    <button
                      onClick={() => navigate(`/productInfo/${product.id}`)}
                      className='btn btn-outline-secondary'
                    >Ver Producto
                    </button>
                  </div>
                </div>


              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Home