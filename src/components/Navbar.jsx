import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <header>
      <h1>Calculadora Geral</h1>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            {/* NavLink funciona como um <a>, serve para pegar as informações do link e o conjunto de informações é um objeto
                to e className são propriedades do componente
                ({isActive}) é uma desestruturação do objeto para acessar diretamente a propriedade isActive do objeto
                isActive ? "active" : "" é uma condicional ternária que verifica se isActive é true ou false e retorna "active" ou "" respectivamente
            */}
            <NavLink
              to="/temperatura"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Temperatura
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/media"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Media
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gorjeta"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Gorjeta
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/desconto"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Desconto
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/area"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Área
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/autonomia"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Autonomia
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/jurossimples"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Juros Simples
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/distancia"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Distância
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;