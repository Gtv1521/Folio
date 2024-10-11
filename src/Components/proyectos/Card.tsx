import React from 'react'
import { IProject } from '../../types/Interfaces'
// import Foto from '../../img/Foto.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

function Card(IProject: IProject) {
  return (
    <div className='container'>
      {
        // este modulo va a mostrar todos los datos puntuales de cada proyecto 
        <div className="container-row">
          <h1>{IProject.title}</h1>

          <div className="dashboard">
            <div className="image">
              <img src={IProject.image} alt="" />
            </div>
            <div className="descriptions">
              <h3>Descripcion</h3>
              <section>
                {IProject.description}
              </section>
              <section>
                {IProject.descriptionUno}
              </section>
              <section>
                {IProject.descriptionDos}
              </section>
              <section>
                {IProject.descriptionTres}
              </section>
            </div>

            <div className="routes">
              <h3>Enlace</h3>
              <section>
                <strong>Puedes ir a visitar la app en este enlace: </strong>
                <a href={IProject.url}>{IProject.url}</a>
              </section>
            </div>
            <div className="space"></div>
          </div>
        </div>
      }
    </div>
  )
}

export default Card