import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../Routes/Home"
// import About from "../Routes/About"
import Blog from "../Routes/Blog"
import Projects from "../Routes/Projects"
// import Nav from "./Nav"


function RoutesApp() {
  return (
    <Router>
      {/* <Nav /> */}
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} /> 
        <Route path="/projects" element={<Projects />} /> 
      </Routes>
    </Router>
  )
}

export default RoutesApp