import { useState } from "react"
import { Link } from "react-router-dom"

// Components
import Welcome from "../Components/personal/Welcome";
import About from "../Components/personal/About";
import Contact from "../Components/personal/Contact";


function Home() {

    // status for aplication 
    const [selectedComponent, setSelectedComponent] = useState("home");

    const renderComponent = () => {
        switch (selectedComponent) {
            case "home":
                return <Welcome />;
            case "about":
                return <About />;
            case "contact":
                return <Contact />;
            default:
                return <Welcome />;
        }
    }

    return (
        <div className='contenedor-home'>
            <div className="container">

                <div className="box">
                    <h1 className="name">Gustavo Bernal Acero</h1>

                    <div className="description">
                        {renderComponent()}
                    </div>
                    <div className="enlaces">
                        <button onClick={() => setSelectedComponent("home")}> Home</button>
                        <button onClick={() => setSelectedComponent("about")}> Sobre mi</button>
                        <button onClick={() => setSelectedComponent("contact")}> Contacto</button>
                        <Link to="/Blog">
                            <button onClick={() => setSelectedComponent("contact")}> Proyectos</button>
                        </Link>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Home