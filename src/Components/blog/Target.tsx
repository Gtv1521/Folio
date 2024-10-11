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
                        <div className="contain">
                            <p className="titulo">{IProject.title}</p>
                            <p className="description">{IProject.description}</p>
                        </div>
                    </div>
                }
            </Link>
        </div>
    )
}

export default Target