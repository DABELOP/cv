import React from 'react'
import './servicesCard.css'

const services = [
    {
        name: 'HTML',
        description: 'Es el lenguaje utilizado para crear y estructurar contenido en la web.',
        icon: 'bi bi-filetype-html'
    },
    {
        name: 'CSS',
        description: 'Lenguaje de estilo utilizado para diseñar y dar formato a páginas web y aplicaciones web.',
        icon: 'bi bi-filetype-css'
    },
    {
        name: 'JavaScript',
        description: 'Lenguaje de programación utilizado para crear aplicaciones interactivas y dinámicas en la web.',
        icon: 'bi bi-filetype-js'
    },
    {
        name: 'React',
        description: 'Biblioteca de JavaScript para construir interfaces de usuario interactivas y reutilizables en la web.',
        icon: 'bi bi-filetype-jsx'
    },
    {
        name: 'SQL',
        description: 'Lenguaje para gestionar y manipular bases de datos relacionales en aplicaciones',
        icon: 'bi bi-filetype-sql'
    },
    {
        name: 'Phyton',
        description: 'Lenguaje de programación para el desarrollo de aplicaciones análisis de datos e inteligencia artificial.',
        icon: 'bi bi-filetype-py'
    },
    {
        name: 'MQL4',
        description: 'Lenguaje de programación para crear robots y asesores expertos de trading en la plataforma MetaTrader 4.',
        icon: 'bi bi-graph-up-arrow'
    },
    {
        name: 'VBA',
        description: 'Lenguaje de programación utilizado para desarrollar aplicaciones de escritorio y móviles en el entorno Windows.',
        icon: 'bi bi-file-earmark-spreadsheet'
    }
]

function MyServices() {
    return (
        <div className='myServicesContainer'>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"></link>
            <div className='servicesTitle d-flex justify-content-center'>
                <h2>Mis</h2>
                <h2 className='titleH2'>Servicios</h2>
            </div>
            <p>Aquí te presento un listado de las tecnologías que utilizo para crear sitios web. A continuación,
                encontrarás una breve descripcion de cada una de ellas. </p>
            <div className='techContainer d-flex flex-wrap justify-content-center'>

                {services.map((service,i) =>
                <div className='techCard' key={i+service.name}>
                    <div className='techCardFront'>
                        <h4 className='cardTitle'>{service.name}</h4>
                        <p className='cardDescription'>{service.description}</p>
                    </div>
                    <div className='techCardBack d-flex flex-column justify-content-center align-items-center'>
                        <i className={service.icon}></i>
                    </div>
                </div>
                )}


            </div>
        </div>
    )
}

export default MyServices