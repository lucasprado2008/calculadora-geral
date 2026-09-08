import { useState } from "react";
import { conversorMilhas } from "../utils/calculosGerais";
import { formatarNumero } from "../utils/formatarNumeros.js";

function Distancia() {
  const [distanciaKm, setDistanciaKm] = useState("");
  const [distanciaMilhas, setDistanciaMilhas] = useState(null);

  function converterMilhas(evento) {
    evento.preventDefault();
    const km = parseFloat(distanciaKm);

    if (isNaN(km)) {
      alert("Os kilômetros não podem estar vazios");
      return;
    }

    const milhas = conversorMilhas(km);

    setDistanciaMilhas(milhas);
  }

  return (
    <section className="calc-page">
      <h2>Conversor de Km para Milhas</h2>
      <form onSubmit={converterMilhas} className="form">
        <label htmlFor="km">Quilômetros:</label>
        <input
          id="km"
          type="number"
          value={distanciaKm}
          onChange={(e) => setDistanciaKm(e.target.value)}
        />
        <button type="submit">Calcular</button>
      </form>

      {distanciaMilhas !== null && (
        <div className="results">
          <p>
            Milhas: <strong>{formatarNumero(distanciaMilhas)}mi</strong>
          </p>
        </div>
      )}
    </section>
  );
}

export default Distancia;
