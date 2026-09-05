import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout.jsx"
import Home from "./pages/Home.jsx"
import Temperatura from "./pages/Temperatura.jsx"
import Media from "./pages/Media.jsx"
import Gorjeta from "./pages/Gorjeta.jsx"
import Desconto from "./pages/Desconto.jsx"
import Area from "./pages/Area.jsx"
import Autonomia from "./pages/Combustivel.jsx"
import JurosS from "./pages/JurosS.jsx"
import Distancia from "./pages/Distancia.jsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="temperatura" element={<Temperatura/>}/>
        <Route path="media" element={<Media/>}/>
        <Route path="gorjeta" element={<Gorjeta/>}/>
        <Route path="desconto" element={<Desconto/>}/>
        <Route path="area" element={<Area/>}/>
        <Route path="autonomia" element={<Autonomia/>}/>
        <Route path="jurossimples" element={<JurosS/>}/>
        <Route path="distancia" element={<Distancia/>}/>
      </Route>
    </Routes>
  );
}

export default App;