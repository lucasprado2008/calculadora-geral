import { useState } from "react";
import { celsiusFahrenheit } from "../utils/calculosGerais";
import { formatarNumero } from "../utils/formatarNumeros.js";

function Temperatura() {
  const [celsius, setCelsius] = useState("");
  const [celsiusCalculado, setCelsiusCalculado] = useState(null);
  const [fahrenheit, setFahrenheit] = useState(null);

  function calcularTemp(evento) {
    evento.preventDefault();
    const temp = parseFloat(celsius);

    if (isNaN(temp)) {
      alert("A temperatura não pode ser vazia");
      return;
    }

    const convTemp = celsiusFahrenheit(temp);

    setCelsiusCalculado(temp);
    setFahrenheit(convTemp);
  }

  return (
    <section className="calc-page">
      <h2>Celsius para Fahrenheit</h2>
      <form onSubmit={calcularTemp} className="form">
        <label htmlFor="temperatura">Celsius (C°)</label>
        <input
          id="temperatura"
          type="number"
          value={celsius}
          onChange={(e) => setCelsius(e.target.value)}
        />
        <button type="submit">Calcular</button>
      </form>

      {fahrenheit !== null && (
        <div className="results">
          <p>
            Temperatura em Celsius:{" "}
            <strong>{formatarNumero(celsiusCalculado)} C°</strong>
          </p>
          <p>
            Temperatura em Fahrenheit:{" "}
            <strong>{formatarNumero(fahrenheit)} F°</strong>
          </p>
        </div>
      )}
    </section>
  );
}

export default Temperatura;
