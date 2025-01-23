import React from 'react'
import { IProject } from '../../types/Interfaces'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons'

function Card(IProject: IProject) {
  return (
    <div className="container-project">
      {
        // este modulo va a mostrar todos los datos puntuales de cada proyecto
        <div className="container-project-row">
          <div className="cabezera">
            <div className="volvera">
              <Link className="icono-volver" to="/projects">
                <FontAwesomeIcon className="icono" icon={faCircleChevronLeft} />
              </Link>
            </div>
            <div className="titulo">
              <h1>{IProject.title}</h1>
            </div>
          </div>

          <div className="dashboard">
            <div className="image">
              <img src={IProject.image} alt="" />
            </div>
            <div className="descriptions">
              <h3>Descripcion</h3>
              <section>{IProject.description}</section>
              <section>{IProject.descriptionUno}</section>
              <section>{IProject.descriptionDos}</section>
              <section>{IProject.descriptionTres}</section>
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
