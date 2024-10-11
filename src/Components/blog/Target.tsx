//  Aqui es donde se crean las targetas de enlace a cada uno de los proyectos
import { Link } from "react-router-dom"
import { IProject } from "../../types/Interfaces"

function Target(IProject: IProject) {
    return (
        <div className="box-targeta">
            <Link to={`/blog/${IProject.id}`}>
                {
                    <div className="contenedor-target">
                        <img src={IProject.image} alt="" />
                        <h2>{IProject.title}</h2>
                        <p>{IProject.description}</p>
                    </div>
                }
            </Link>
        </div>
    )
}

export default Target