//  Aqui es donde se crean las targetas de enlace a cada uno de los proyectos
import { IProject } from "../../types/Interfaces"

function Target(IProject: IProject) {
    return (
        <div className="box-targeta">
            {
                <div className="contenedor-target">
                    <img src={IProject.image} alt=""/>
                    <h2>{IProject.title}</h2>
                    <p>{IProject.description}</p>
                </div>

            }
        </div>
    )
}

export default Target