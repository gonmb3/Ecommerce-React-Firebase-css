import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { getDoc, doc } from 'firebase/firestore';
import fireDB from '../../firebaseConfig/firebase';

import Layout from './../../components/layout/Layout';
import { HiArrowCircleLeft } from "react-icons/hi"
import "../../styles/products.css"



const ProductInfo = () => {

  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {       { /*Obtener datos infoproducto de firebase  */}
    try {
      setLoading(true);
      const productTemp = await getDoc(doc(fireDB, "products", id))
     
      setProduct(productTemp.data());
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);


  return (
    <Layout loading = {loading}>     { /*Iterando info//detalles de producto */}
      {product && (


          <div className="container  p-5 ">
            <div className="row justify-content-center">
              <div className="col-md-8 productInfo-container ">
                <h2 className='py-2'><b> {product.title} </b> </h2>

                <img src={product.image} alt={product.title} className="productInfo-img" />

                <hr />
                <h2 className='my-2 price'>${product.price} </h2>
                <p>{product.description} </p>
                <div className="d-flex justify-content-between  ">

                  { /* Funcion  agregar al carrito de compras desde pagina info/detalles de producto*/}
                  <Link to="/">    <button className='btn btn-secondary '><HiArrowCircleLeft size={33} /> Volver</button></Link>
                  <button className='btn btn-primary my-3'>Agregar al Carrito</button>
                </div>
              </div>
            </div>
          </div>

        

      )}
    </Layout>
  )
}

export default ProductInfo