import React from 'react';
import logo from '../assets/img/Logo.png'

function NavBar() {
    return (

        <nav className='nav fixed-top'>
            <div className='navContainer'>

                <a href='#home'><img className="imgLogo" src={logo} alt='logo'/></a>

                <ul className="linksList">
                    <li className="">
                        <a className="navBarLink" href="#home">Inicio</a>
                    </li>
                    <li className="">
                        <a className="navBarLink" href="#about">Acerca de</a>
                    </li>
                    <li className="">
                        <a className="navBarLink" href="#projects">Proyectos</a>
                    </li>
                    <li className="">
                        <a className="navBarLink" href="#contact">Contacto</a>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default NavBar



