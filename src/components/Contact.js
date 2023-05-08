import React from 'react';

function Contact() {
    return (

        <div className='d-flex justify-content-center flex-column align-items-center contactContainer' id='contact'>

            <div className='servicesTitle d-flex justify-content-center'>
                <h2>Formulario de</h2>
                <h2 className='titleH2'>contácto</h2>
            </div>

            <form className='contactForm'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Correo electrónico</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">Nunca compartiremos su correo electrónico con nadie más.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputText" className="form-label">Mensaje</label>
                    <textarea type="text" className="form-control messajeLabel" id="message" />
                </div>

                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    )
}

export default Contact