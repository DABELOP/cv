import React from 'react'
import ProfileImg from '../assets/img/profileImg.jpg'
import './mainAnimation.css'

function MainContainer() {
    return (

        <div className='mainContainer' id='home' >
            <div className='biography'>
                <h1 className='helloMain'>Hola!</h1>
                <div className="animation">
                    <h1>
                        <span>Soy</span>
                        <div className="message">
                            <div className="word1">Desarrollador web</div>
                            <div className="word2">Danilo</div>
                        </div>
                    </h1>
                </div>
                <p className='homeMessage'>Apasionado por la tecnología y el mundo digital, desarrollo soluciones innovadoras y funcionales.</p>
                <div className='biographyButtons d-flex'>
                    <a href='#projects'><p>Ver trabajos</p></a>
                    <a href='#contact'><p>Contrátame</p></a>
                </div>
            </div>
            <img className='profileImg' src={ProfileImg} alt='Profile' />
        </div>

    )
}

export default MainContainer