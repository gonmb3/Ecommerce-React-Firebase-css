import Footer from '../footer/Footer'
import Header from '../header/Header'
import Loader from './../loader/Loader';

const Layout = (props) => {

  


  return (
    <>
    {props.loading && ( <Loader/> ) }
    <Header />
        <div className="content">
        {props.children}
        </div>
      { /* <Footer/> */ }
    </>
  )
}

export default Layout