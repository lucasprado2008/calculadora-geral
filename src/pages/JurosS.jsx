import { useState } from "react";
import { jurosSimples } from "../utils/calculosGerais.js";
import { formatarNumero } from "../utils/formatarNumeros.js";

function JurosSimples() {
  const [capitalInicial, setCapitalInicial] = useState("");
  const [juros, setJuros] = useState("");
  const [tempo, setTempo] = useState("");
  const [totalFinal, setTotalFinal] = useState(null);

  function calcJurosSimples(evento) {
    evento.preventDefault();
    const capital = parseFloat(capitalInicial);
    const taxa = parseFloat(juros);
    const tempoEmMeses = parseFloat(tempo);

    if (isNaN(capital) || isNaN(taxa) || isNaN(tempoEmMeses)) {
      alert("Os números devem ser preenchidos");
      return;
    }

    if (capital < 0 || taxa < 0 || tempoEmMeses < 0) {
      alert("Os valores não podem ser negativos");
      return;
    }

    const total = jurosSimples(capital, taxa, tempoEmMeses);
    setTotalFinal(total);
  }

  return (
    <section className="calc-page">
      <h2>Calcular Juros Simples</h2>
      <form onSubmit={calcJurosSimples} className="form">
        <label htmlFor="capital">Capital Investido:</label>
        <input
          id="capital"
          type="number"
          value={capitalInicial}
          onChange={(e) => setCapitalInicial(e.target.value)}
        />

        <label htmlFor="juros">Taxa de Juros:</label>
        <input
          id="juros"
          type="number"
          value={juros}
          onChange={(e) => setJuros(e.target.value)}
        />

        <label htmlFor="tempo">Tempo(Meses):</label>
        <input
          id="tempo"
          type="number"
          value={tempo}
          onChange={(e) => setTempo(e.target.value)}
        />

        <button type="submit">Calcular</button>
      </form>

      {totalFinal !== null && (
        <div className="results">
          <p>
            Montante: <strong>R${formatarNumero(totalFinal)}</strong>
          </p>
        </div>
      )}
    </section>
  );
}

export default JurosSimples;
