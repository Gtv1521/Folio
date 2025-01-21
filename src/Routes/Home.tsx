import { useState } from 'react'

// Components
import Welcome from '../Components/personal/Welcome'
import About from '../Components/personal/About'
import Contact from '../Components/personal/Contact'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAddressBook,
  faAddressCard,
  faArrowLeft,
  faArrowRight,
  faDownload,
  faFolderOpen,
  faHouse,
  faLayerGroup,
} from '@fortawesome/free-solid-svg-icons'
import Projects from './Projects'

function Home() {
  // status for aplication
  const [selectedComponent, setSelectedComponent] = useState('home')
  const [toggle, setToggle] = useState(true)

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'home':
        return <Welcome />
      case 'about':
        return <About />
      case 'contact':
        return <Contact />
      case 'projects':
        return <Projects />
      default:
        return <Welcome />
    }
  }

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href =
      'https://github.com/Gtv1521/Gtv1521/raw/master/src/curriculum/Curriculum-GustavoBernal.pdf'
    link.setAttribute('download', 'Curriculum-GustavoBernal.pdf')
    link.click()
  }

  return (
    <div className="contenedor-home">
      {/* Menu */}
      <div className={`contenedor ${toggle ? 'menu-grande' : 'menu-pequeno'}`}>
        {/* Logo */}
        <div className="logo">
          <div
            className="inicio-log"
            onClick={() => setSelectedComponent('home')}
          >
            <span className="image">
              <FontAwesomeIcon icon={faFolderOpen} />
            </span>
            <div className={toggle ? 'text' : 'none'}>
              <h1>Portafolio</h1>
            </div>
          </div>
        </div>

        <div className="toggle">
          {/* Toggle menu */}
            <span
              className={`arrow ${toggle ? 'rigth' : 'left' }`}
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
        <div className="enlaces">
          <button
            className="enlace-vista"
            onClick={() => setSelectedComponent('home')}
          >
            <span className="icono">
              <FontAwesomeIcon icon={faHouse} />
            </span>
            <div className={toggle ? 'text' : 'none'}>Home</div>
          </button>

          <button
            className="enlace-vista"
            onClick={() => setSelectedComponent('about')}
          >
            <span className="icono">
              <FontAwesomeIcon icon={faAddressCard} />
            </span>
            <div className={toggle ? 'text' : 'none'}>Sobre mi</div>
          </button>

          <button
            className="enlace-vista"
            onClick={() => setSelectedComponent('contact')}
          >
            <span className="icono">
              <FontAwesomeIcon icon={faAddressBook} />
            </span>
            <div className={toggle ? 'text' : 'none'}>Contacto</div>
          </button>

          <button
            className="enlace-vista"
            onClick={() => setSelectedComponent('projects')}
          >
            <span className="icono">
              <FontAwesomeIcon icon={faLayerGroup} />
            </span>
            <div className={toggle ? 'text' : 'none'}>Proyectos</div>
          </button>

          <button className="enlace-vista" onClick={handleDownload}>
            <span className="icono">
              <FontAwesomeIcon icon={faDownload} />
            </span>
            <div className={toggle ? 'text' : 'none'}>Curriculum</div>
          </button>
        </div>

        {/* datos perfil */}
        <div className="perfil">
          <img src="profile.jpg" alt="Profile" />
          <h2>Gustavo Bernal Acero</h2>
        </div>
      </div>

      {/* Muestra */}
      <div className={`container ${toggle ? 'container-small' : 'container-big'}`}>
        {selectedComponent === 'projects' ? (
          <div className="muestra-projects">{renderComponent()}</div>
        ) : (
          <div className="box">
            <div className="title">
              <h1>Gustavo Bernal Acero</h1>
            </div>
            <div className="description">{renderComponent()}</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
