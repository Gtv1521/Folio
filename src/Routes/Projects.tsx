import Target from '../Components/blog/Target'
import datos from '../data/datos.json'

function allTarget(projects: any) {
  return projects.map((app: any) => (
    <Target
      key={app.id}
      id={app.id}
      image={app.image}
      url={app.url}
      git={app.git}
      title={app.title}
      description={app.description}
      descriptionUno={app.descriptionUno}
      descriptionDos={app.descriptionDos}
      descriptionTres={app.descriptionTres}
      tecnologias={app.tecnologias}
    />
  ))
}

function Projects() {
  return (
    <div className="contenedor-file">
      <div className="titulos">
        <div className="titulo">
          <h1>Proyectos</h1>
        </div>
      </div>
      <div className="all-projects">
        <h3>Backend</h3>
        <div className="contenedor-row">
          {
            allTarget(datos.backend) 
          }
        </div>
        <h3>Frontend</h3>
        <div className="contenedor-row">
          {
            allTarget(datos.frontend) 
          }
        </div>
      </div>
    </div>
  )
}

export default Projects
