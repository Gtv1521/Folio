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

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = 'https://github.com/Gtv1521/Gtv1521/raw/master/src/curriculum/Curriculum-GustavoBernal.pdf';
        link.setAttribute('download', 'Curriculum-GustavoBernal.pdf');
        link.click();
    };

    return (
        <div className='contenedor-home'>
            <div className="container">
                <div className="box">
                    <div className="collecion">
                        <h1 className="name">Gustavo Bernal Acero</h1>

                        <div className="description">
                            {renderComponent()}
                        </div>
                        <div className="enlaces">
                            <button onClick={() => setSelectedComponent("home")}> Home</button>
                            <button onClick={() => setSelectedComponent("about")}> Sobre mi</button>
                            <button onClick={() => setSelectedComponent("contact")}> Contacto</button>
                            <Link to="/projects">
                                <button onClick={() => setSelectedComponent("contact")}> Proyectos</button>
                            </Link>
                            <button onClick={handleDownload}> Curriculum</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Home