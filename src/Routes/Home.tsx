import { useState } from 'react'

// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowLeft,
  faArrowRight,
  faFolderOpen,
} from '@fortawesome/free-solid-svg-icons'
import perfil from '../assets/images/perfil.png'
import { Navigate, Outlet } from 'react-router-dom'
import Enlaces from '../Components/nav/Enlaces'

function Home() {
  const [toggle, setToggle] = useState(true)

  return (
    <div className="contenedor-home">
      {/* Menu */}
      <div className={`contenedor ${toggle ? 'menu-grande' : 'menu-pequeno'}`}>
        {/* Logo */}
        <div className="logo">
          <span className="image">
            <FontAwesomeIcon icon={faFolderOpen} />
          </span>
          <div className={toggle ? 'text' : 'none'} onClick={() => Navigate}>
            <h1>Portafolio</h1>
          </div>
        </div>

        <div className="toggle">
          {/* Toggle menu */}
          <span
            className={`arrow ${toggle ? 'rigth' : 'left'}`}
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? (
              <FontAwesomeIcon icon={faArrowLeft} />
            ) : (
              <FontAwesomeIcon icon={faArrowRight} />
            )}
          </span>
        </div>

        {/* enlaces a diferentes ramas */}
        <Enlaces toggle={toggle} />

        {/* datos perfil */}
        <div className="perfil">
          <div className="contenido-perfil">
            <div className="img-perfil">
              {toggle ? (
                <img className="img-big" src={perfil} alt="Profile" />
              ) : (
                <img className="img-small" src={perfil} alt="Profile" />
              )}
            </div>
            <div className="name">
              {toggle ? <h2>Gustavo Bernal Acero</h2> : <h2>G. B. </h2>}
            </div>
          </div>
        </div>
      </div>

      {/* Muestra */}
      <div
        className={`container ${toggle ? 'container-small' : 'container-big'}`}
      >
        <div className="muestra-projects">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Home
