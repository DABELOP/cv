import React from 'react'
import logo from '../assets/img/profileImg2.jpg'
import { useEffect, useRef } from 'react'

function PersonalDescription() {

  const descriptionContainer = useRef(null);

  useEffect(() => {
    const options = {
      rootMargin: '0px',
      threshold: 0.5
    };

    const activarAnimacion = (elemento) => {
      elemento.classList.add('animate');
    };

    const observer = new IntersectionObserver((entradas, observer) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          activarAnimacion(entrada.target);
          observer.unobserve(entrada.target);
        }
      });
    }, options);

    observer.observe(descriptionContainer.current);

    return () => {
      if (descriptionContainer.current) {
        observer.unobserve(descriptionContainer.current);
      }
    };
  }, []);


  return (
    <div className='DescriptionContainer d-flex justify-content-center align-items-center'>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"></link>
      <div ref={descriptionContainer} className='PersonalDescriptionContainer d-flex justify-content-center align-items-center' >

        <img className='logoCodeLab' src={logo} />

        <div className='description'>
          <h2 id='about'>Hola,</h2>
          <div className='d-flex'>
            <h2> Mi nombre es </h2><h2 className='descriptionName mx-2'>Danilo Bedoya</h2>
          </div>
          <p className='personalDescription'>Soy desarrollador y mi trabajo consiste en crear sitios web y aplicaciones eficientes y fáciles de usar,
            Utilizo diferentes lenguajes de programación y herramientas para construir sitios web que se ajusten a las necesidades de clientes y usuarios.<br />
            Si estás buscando un desarrollador confiable e innovador para ayudarte a llevar tu negocio en línea, ¡estaré encantado de trabajar contigo!</p>

          <div className='detailsList'>
            <div className='personalDetail'>
              <span className='titleDetail'>Nombre:</span><span className='detail mx-3'>Danilo Bedoya López</span>
            </div>

            <div className='personalDetail'>
              <span className='titleDetail'>Ubicacion:</span><span className='detail mx-3' >Medellin Colombia</span>
            </div>

            <div className='personalDetail'>
              <span className='titleDetail'>Edad:</span><span className='detail mx-3' >29</span>
            </div>

            <div className='personalDetail'>
              <span className='titleDetail'>E-mail:</span><span className='detail mx-3'>danilobedoya94@gmail.com</span>
            </div>
          </div>
          <div className='profileLinks d-flex'>
            <a href='https://drive.google.com/file/d/1pBuK0aqkw0h4ZuDX_CB--hFtI7EXahKz/view?usp=sharing' target="_blank">
              <p className='downloadCV'>Descargar CV</p></a>
            <a href='https://www.linkedin.com/in/danilo-bedoya-lopez/' target="_blank"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalDescription
