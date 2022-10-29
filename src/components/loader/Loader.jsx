import "../../styles/layout.css"

const Loader = () => {

  return (
    <>          {/*Loader from loadin.io*/}
      <div className="d-flex align-items-center loader">
        <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
      </div>
    </>
  )
}

export default Loader