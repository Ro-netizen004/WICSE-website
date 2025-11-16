import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"
import Team from "./pages/Team"
import Membership from "./pages/Membership"
import Events from "./pages/Events"
import Partnership from "./pages/Partnership"
import Contact from "./pages/Contact"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path = "/home" element ={<Home />} />
        <Route path = "/" element ={<Home />} />
        <Route path = "/about" element ={<About/>} />
        <Route path="/team" element={<Team />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/events" element={<Events />} />
        <Route path="/partners" element={<Partnership />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
