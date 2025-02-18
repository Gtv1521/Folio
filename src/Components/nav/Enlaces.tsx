import {
  faAddressBook,
  faAddressCard,
  faDownload,
  faHouse,
  faLayerGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

interface PropsEntrada {
  toggle: boolean
}

function Enlaces({ toggle }: PropsEntrada): JSX.Element {
  /// Descarga link de descarga del curriculum
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href =
      'https://github.com/Gtv1521/Folio/raw/master/src/assets/images/GustavoBernal-Cv.pdf'
    link.setAttribute('download', 'Curriculum-GustavoBernal.pdf')
    link.click()
  }

  return (
    <div className="enlaces">
      <NavLink to={'/'} className="enlace-vista">
        <div className="contenido-btn">
          <span className="icono">
            <FontAwesomeIcon icon={faHouse} />
          </span>
          <div className={toggle ? 'text' : 'none'}>Home</div>
        </div>
      </NavLink>

      <NavLink to={'/about'} className="enlace-vista">
        <div className="contenido-btn">
          <span className="icono">
            <FontAwesomeIcon icon={faAddressCard} />
          </span>
          <div className={toggle ? 'text' : 'none'}>Sobre mi</div>
        </div>
      </NavLink>

      <NavLink to="contact" className="enlace-vista">
        <div className="contenido-btn">
          <span className="icono">
            <FontAwesomeIcon icon={faAddressBook} />
          </span>
          <div className={toggle ? 'text' : 'none'}>Contacto</div>
        </div>
      </NavLink>

      <NavLink to="/projects" className={`enlace-vista`}>
        <div className="contenido-btn">
          <span className="icono">
            <FontAwesomeIcon icon={faLayerGroup} />
          </span>
          <div className={toggle ? 'text' : 'none'}>Proyectos</div>
        </div>
      </NavLink>

      <button className={`enlace-vista`} onClick={handleDownload}>
        <div className="contenido-btn">
          <span className="icono">
            <FontAwesomeIcon icon={faDownload} />
          </span>
          <div className={toggle ? 'text' : 'none'}>Curriculum</div>
        </div>
      </button>
    </div>
  )
}

export default Enlaces
