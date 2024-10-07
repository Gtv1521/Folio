import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../Routes/Home"
// import About from "../Routes/About"
import Blog from "../Routes/Blog"
// import Nav from "./Nav"


function RoutesApp() {
  return (
    <Router>
      {/* <Nav /> */}
      <Routes>
        <Route index path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
         {/* <Route exact path="/contact" element={<Contact />} /> */}
        <Route path="/blog" element={<Blog />} /> 
      </Routes>
    </Router>
  )
}

export default RoutesApp