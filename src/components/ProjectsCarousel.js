import React from 'react'
import joobbokProject from '../assets/img/joobbokProject.jpg'
import chatGPTProject from '../assets/img/chatGPTProject.jpg'
import metatraderProject from '../assets/img/metatraderProject.jpg'
import pruebaTecnica from '../assets/img/pruebaTecnica.jpg'
import proximamente from '../assets/img/proximamente.png'



function ProjectsCarousel() {

    return (

        <div className='carouselContainer'>

            <div className='servicesTitle d-flex justify-content-center' id='projects'>
                <h2>Mis proyectos</h2>
                <h2 className='titleH2'>realizados</h2>
            </div>


            {<div className='cardsContainer d-flex flex-wrap justify-content-center'>

                <div className="card">
                    <a href='https://grupo1jobbook-production-2c1f.up.railway.app/' target='blank'>
                        <img src={joobbokProject} className="card-img-top" alt="jobbook" />
                        <div className="card-body">
                            <p className="card-text">Aplicacion web que sirve para vender y contratar servicios de profesionales y expertos</p>
                        </div>
                    </a>
                </div>

                <div className="card">
                    <img src={chatGPTProject} className="card-img-top" alt="jobbook" />
                    <div className="card-body">
                        <p className="card-text">Aplicacion que integra Chat GPT y permite usarla mediante comandos de voz asi mismo las respuestas tambien las genera por medio de voz</p>
                        <img src={proximamente} width='150px' text-align='center'/>
                    </div>
                </div>

                <div className="card">
                    <a href='https://drive.google.com/file/d/1Q2K3W8EMH1qDhQiw3yeYpQNwhum2-E1C/view?usp=sharing' target='blank'>
                        <img src={metatraderProject} className="card-img-top" alt="jobbook" />
                        <div className="card-body">
                            <p className="card-text">Asesor experto que permite realizar trading algoritmico en la plataforma Metatrader 4 actualmente funciona en el par EUR-USD y en el indice US30</p>
                        </div>
                    </a>
                </div>

                <div className="card">
                    <a href='https://dabelop.github.io/pruebaTecnicaProteccion/' target='blank'>
                        <img src={pruebaTecnica} className="card-img-top" alt="jobbook" />
                        <div className="card-body">
                            <p className="card-text">Prueba técnica para desarrollador front-end en react, consumir API de super heroes y listar imagenes, tiempo para realizar la prueba: 2h:40m</p>
                        </div>
                    </a>
                </div>


            </div>
            }

        </div>
    )
}

export default ProjectsCarousel; 