import React from 'react'

const Payment = () => {
    return (
        <>
            <form className="needs-validation" novalidate>
                <div className="form-row">
                    <div className="col-md-6 mb-3">
                        <label for="validationCustom01">Nombre</label>
                        <input type="text" className="form-control" id="validationCustom01" placeholder="First name" value="nombre..." required />
                    
                    </div>
                    <div className="col-md-4 mb-3">
                        <label for="validationCustom02">Apellido</label>
                        <input type="text" className="form-control" id="validationCustom02" placeholder="Last name" value="apellido.." required />

                    </div>
                    
                </div>
                <div className="form-row">
                    <div className="col-md-6 mb-3">
                        <label for="validationCustom03">Ciudad</label>
                        <input type="text" className="form-control" id="validationCustom03" placeholder="ciudad..." required />
                    </div>
                    <div className="col-md-3 mb-3">
                        <label for="validationCustom04">Dirección</label>
                        <input type="text" className="form-control" id="validationCustom04" placeholder="dirección..." required />

                    </div>
                    <div className="col-md-3 mb-3">
                        <label for="validationCustom05">Tareja de Credito</label>
                        <input type="text" className="form-control" id="validationCustom05" placeholder="numero de tarjeta..." required />

                    </div>
                    <div className="col-md-3 mb-3">
                        <label for="validationCustom05">Pin</label>
                        <input type="password" className="form-control" id="validationCustom05" placeholder="pin..." required />

                    </div>
                </div>
                <div className="form-group">

                </div>
                <button className="btn btn-primary" type="submit">Finalizar Compra</button>
            </form>

        </>
    )
}

export default Payment