
import {Routes, Route} from "react-router-dom"
import {Container} from "react-bootstrap"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"

function App() {
  return (
  <Container>
  <h1>React Typescript Shopping Cart</h1>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/store" element={<Store/>} />
    <Route path="/about" element={<About/>} />
  </Routes>
  </Container>
  )
}

export default App
