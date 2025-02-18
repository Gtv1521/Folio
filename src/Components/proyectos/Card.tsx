import React from 'react'
import { IProject } from '../../types/Interfaces'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons'

function Card(Datos: IProject) {
  console.log(Datos)
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
              <h1>{Datos.title}</h1>
            </div>
          </div>

          <div className="dashboard">
            <div className="image">
              <a href={Datos.url}>
                <img src={Datos.image} alt="" />
              </a>
            </div>
            <div className="descriptions">
              <h3>Descripcion</h3>
              <section>{Datos.description}</section>
              <section>{Datos.descriptionUno}</section>
              <section>{Datos.descriptionDos}</section>
              <section>{Datos.descriptionTres}</section>
            </div>
            <div className="descriptions">
              <h3>Tecnologias usadas:</h3>
              <ul>
                {Datos.tecnologias?.map((tech, index) => (
                  <li key={index}><strong> {tech} </strong></li>
                ))}
              </ul>
            </div>

            <div className="routes">
              <h3>Enlace</h3>
              <section>
                <strong>Puedes ir a visitar la app en este enlace: </strong>
                <a href={Datos.url}>{Datos.url}</a>
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
