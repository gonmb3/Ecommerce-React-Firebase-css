import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from './../../firebaseConfig/firebase';

import Loader from '../../components/loader/Loader';
import { toast } from 'react-toastify';
import "../../styles/loginRegisterForms.css"

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [loading, setLoading] = useState(false);
    
    const navigate = useNavigate();


    const auth= getAuth(app);         
                                                 
    const handleSubmit = async (e) =>{    
      e.preventDefault();
      try {                                 {/*REGISTRO CREAR USUARIO/CUENTA CON FIREBASE*/}   
        setLoading(true)
      const user =  await createUserWithEmailAndPassword(auth, email, password);
       {/*--- LOCALSTORAGE ----*/}  
       localStorage.setItem("currentUser",JSON.stringify(user))
        setLoading(false)
        toast.success("Registro Existoso!")
        navigate("/")
      } catch (error) {       
        console.log(error);
        toast.error("Registro Fallido!")
        setLoading(false)
      }
    }
  


  return (

    <div className='register-container'>

      {loading && (<Loader/>)}    {/*SPINNER*/}  

      <div className="register-top-backGround"></div>
      <div className="row justify-content-center">
          <div className="col-md-5 ">

               {/*LOTTIE ANIMATION*/}  
        <lottie-player     
         src="https://assets6.lottiefiles.com/private_files/lf30_ng6ygsm6.json"  
          background="transparent"  
          speed="1" 
          loop                        
          autoplay>
        </lottie-player>
          </div>

          <div className="col-md-4 z-index-1"> 
              <form 
              onSubmit={handleSubmit} 
               className="register-form m-1">
                    <h2>Registrate</h2>
                    <hr />
                    <input type="text" className="form-control" placeholder="Email..." value={email} onChange={(e) => setEmail(e.target.value)} />

                    <input type="password" className="form-control" placeholder="Contraseña..." value={password} onChange={(e) => setPassword(e.target.value)}/>

                    <input type="password" className="form-control" placeholder="Confirmar contraseña..." value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>

                    <button 
                    type='submit'
                     className='btn my-3 btn-primary'
                     >Registrate
                    </button>
                  <hr />
                    <p>Ya tienes cuenta? <Link to="/login" style={{color:"blue"}}>Inicia Sesión!</Link> </p>
              </form>
          </div>

      </div>
    </div>
  )
}

export default Register