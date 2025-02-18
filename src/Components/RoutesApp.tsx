import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import Home from '../Routes/Home'
// import About from "../Routes/About"
import Blog from '../Routes/Blog'
import Projects from '../Routes/Projects'
import About from './personal/About'
import Contact from './personal/Contact'
import Welcome from './personal/Welcome'
import NotFound from './utils/NotFound'
// import Nav from "./Nav"

function RoutesApp() {
  return (
    <Router>
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Home />}>
          {/* Redirección por defecto a /home */}
          <Route index element={<Navigate to="/home" replace />} />

          {/* Rutas principales */}
          <Route path="home" element={<Welcome />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />}></Route>
          {/* ruta dinamica */}
          <Route path="blog/:id" element={<Blog />} />

          {/* Manejo de rutas no encontradas */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default RoutesApp
