import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

import { AiOutlineShoppingCart } from "react-icons/ai"
import { FcShop } from "react-icons/fc"

const Header = () => {

  const { cartItems } = useSelector(state => state.cartReducer);


  /*OBTENER USUARIO/CUENTA DE LOCAL STORAGE*/ 
  const {user} = JSON.parse(localStorage.getItem("currentUser"));


    /*FUNCTION LOGOUT*/ 
  const logout = () =>{
    localStorage.removeItem("currentUser")
    window.location.reload();
  }

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand fw-bold" href="#">Tu Shopping<FcShop size={40} /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "> </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link " aria-current="page" href="#">{user ? user.email : "Invitado"} </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link" href="#">Ordenes</Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={logout}
                  to="/login" 
                  className="nav-link" 
                  href="#">{user ? "Cerrar Sesión" : "Iniciar Sesión"}
             </Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link">
                  <AiOutlineShoppingCart size={26} /><span>{cartItems.length} </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header



