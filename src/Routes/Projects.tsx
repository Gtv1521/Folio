import React from 'react'
import Target from '../Components/blog/Target'
import datos from '../data/datos.json';

function allTarget(projects: any) {
    return projects.map((app: any) =>
        <Target key={app.id} id={app.id} image={app.image} url={app.url} title={app.title} description={app.description} ></Target>
    )
}

function Projects() {
    return (
        <div className='contenedor'>
            <div className="titulos">

                <h1>Proyectos</h1>
            </div>
            <div className="all-projects">
                <h3>Backend</h3>
                <div className="contenedor-row">
                    {
                        allTarget(datos.backend) // Aqui se va a crear cada una de las targetas para cada proyecto
                    }
                </div>
                <h3>Frontend</h3>
                <div className="contenedor-row">
                    {
                        allTarget(datos.frontend) // Aqui se va a crear cada una de las targetas para cada proyecto
                    }
                </div>
                <h3>Monoliticos</h3>
                <div className="contenedor-row">
                    {
                        allTarget(datos.Monoliticas) // Aqui se va a crear cada una de las targetas para cada proyecto   
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects
