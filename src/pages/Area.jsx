import { useState } from "react";
import { calcularArea } from "../utils/calculosGerais.js";

function Area() {
  const [largura, setLargura] = useState("");
  const [comprimento, setComprimento] = useState("");
  const [areaFinal, setAreaFinal] = useState(null);

  function calcArea(evento) {
    evento.preventDefault();
    const larg = parseFloat(largura);
    const comp = parseFloat(comprimento);

    if (isNaN(larg) || isNaN(comp)) {
      alert("Os números devem ser preenchidos");
      return;
    }

    if (larg < 0 || comp < 0) {
      alert("Os valores não podem ser negativos");
      return;
    }

    const total = calcularArea(larg, comp);
    setAreaFinal(total);
  }

  return (
    <section className="calc-page">
      <h2>Calcular Área</h2>
      <form onSubmit={calcArea} className="form">
        <label htmlFor="largura">Largura (m)</label>
        <input
          id="largura"
          type="number"
          value={largura}
          onChange={(e) => setLargura(e.target.value)}
        />

        <label htmlFor="comprimento">Comprimento (m)</label>
        <input
          id="comprimento"
          type="number"
          value={comprimento}
          onChange={(e) => setComprimento(e.target.value)}
        />

        <button type="submit">Calcular</button>
      </form>

      {areaFinal !== null && (
        <div className="results">
          <p>
            Área: <strong>{areaFinal}m²</strong>
          </p>
        </div>
      )}
    </section>
  );
}

export default Area;
