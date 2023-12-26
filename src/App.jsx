import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./assets/styles.css"
import Home from "./Home"
import Soil from "./Soil"

function App() {
  

  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route  path="soil/:soil_type" element={<Soil/>}/>
  </Routes>
  </BrowserRouter>
}

export default App
