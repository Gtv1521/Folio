import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../Routes/Home'
// import About from "../Routes/About"
import Blog from '../Routes/Blog'
import Projects from '../Routes/Projects'
import About from './personal/About'
import Contact from './personal/Contact'
import Welcome from './personal/Welcome'
// import Nav from "./Nav"

function RoutesApp() {
  return (
    <Router>
      {/* <Nav /> */}
      <Routes>
        {/* Arranque de app */}
        <Route path="/" element={<Home />}>
          {/* Rutas personales */}
          <Route index path="home" element={<Welcome />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />

          {/* Muestras de proyect */}
          <Route path="blog/:id" element={<Blog />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default RoutesApp
