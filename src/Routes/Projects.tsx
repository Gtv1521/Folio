import React from 'react'
import Target from '../Components/blog/Target'
import datos from '../data/datos.json';

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
                        // Aqui se va a crear cada una de las targetas para cada proyecto
                        datos.backend.map((app) => (
                            <Target id={app.id} image={app.image} url={app.url} title={app.title} description={app.description} ></Target>
                        ))
                    }
                </div>
                <h3>Frontend</h3>
                <div className="contenedor-row">

                    {
                        // Aqui se va a crear cada una de las targetas para cada proyecto
                        datos.frontend.map((app) => (
                            <Target id={app.id} image={app.image} url={app.url} title={app.title} description={app.description} ></Target>
                        ))
                    }
                </div>
                <h3>Monoliticas</h3>
                <div className="contenedor-row">

                    {
                        // Aqui se va a crear cada una de las targetas para cada proyecto
                        datos.Monoliticas.map((app) => (
                            <Target id={app.id} image={app.image} url={app.url} title={app.title} description={app.description} ></Target>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects
