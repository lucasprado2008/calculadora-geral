import { useState } from "react";
import { calcularAutonomia } from "../utils/calculosGerais.js";
import { formatarNumero } from "../utils/formatarNumeros.js";

function Combustivel() {
  const [distancia, setDistancia] = useState("");
  const [combustivel, setCombustivel] = useState("");
  const [autonomia, setAutonomia] = useState(null);

  function calcAutonomia(evento) {
    evento.preventDefault();
    const valorDistancia = parseFloat(distancia);
    const combustivelGasto = parseFloat(combustivel);

    if (isNaN(distancia) || isNaN(combustivel)) {
      alert("Os números devem ser preenchidos");
      return;
    }

    if (distancia < 0 || combustivel < 0) {
      alert("Os valores não podem ser negativos");
      return;
    }

    const total = calcularAutonomia(valorDistancia, combustivelGasto);
    setAutonomia(total);
  }

  return (
    <section className="calc-page">
      <h2>Calcular Desconto</h2>
      <form onSubmit={calcAutonomia} className="form">
        <label htmlFor="distancia">Distancia:</label>
        <input
          id="distancia"
          type="number"
          value={distancia}
          onChange={(e) => setDistancia(e.target.value)}
        />

        <label htmlFor="combustivel">Combustível Gasto:</label>
        <input
          id="combustivel"
          type="number"
          value={combustivel}
          onChange={(e) => setCombustivel(e.target.value)}
        />

        <button type="submit">Calcular</button>
      </form>

      {autonomia !== null && (
        <div className="results">
          <p>
            Autonomia: <strong>{formatarNumero(autonomia)}km/l</strong>
          </p>
        </div>
      )}
    </section>
  );
}

export default Combustivel;
