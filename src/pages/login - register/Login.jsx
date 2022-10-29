import {getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Loader from '../../components/loader/Loader';

import "../../styles/loginRegisterForms.css"
import { toast } from 'react-toastify';
import { app } from './../../firebaseConfig/firebase';


const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");  

  const [loading, setLoading] = useState(false);

  const auth= getAuth(app);
  const navigate = useNavigate();

  const handleSubmit = async (e) =>{
    e.preventDefault();                    
    try {                            {/*---INICIAR SESION, CUENTA/USUARIO CON FIREBASE---*/}  
      setLoading(true)                     
     const user = await signInWithEmailAndPassword(auth, email, password);
      {/*--- LOCALSTORAGE ----*/}  
      localStorage.setItem("currentUser",JSON.stringify(user))
     
      setLoading(false)
      toast.success("Inicio de Sesión Existoso!")
      navigate("/")
    } catch (error) {
      console.log(error);
      toast.error("Inicio de Sesión  Fallido!")
      setLoading(false)
    }
  }


  return (


    <div className='login-container'>

        {loading && (<Loader/>)}    {/*SPINNER*/}        

      <div className="login-bottom-backGround"></div>
      <div className="row justify-content-center">

        <div className="col-md-4 z-index-1">
          <form
            onSubmit={handleSubmit}
            className="login-form m-1">
            <h2>Iniciar Sesión</h2>
            <hr />
            <input type="text" className="form-control" placeholder="Email..." value={email} onChange={(e) => setEmail(e.target.value)} />

            <input type="password" className="form-control" placeholder="Contraseña..." value={password} onChange={(e) => setPassword(e.target.value)} />


            <button 
             className='btn my-3 btn-primary'>Iniciar Sesión</button>

            <hr />
            <p>No tienes cuenta? <Link to="/register" style={{ color: "blue" }}>Registrate!</Link> </p>
          </form>

        </div>

        <div className="col-md-5 ">

          <lottie-player src="https://assets6.lottiefiles.com/private_files/lf30_ng6ygsm6.json"
            background="transparent"
            speed="1"
            loop
            autoplay>
          </lottie-player>
        </div>



      </div>

    </div>
  )
}

export default Login