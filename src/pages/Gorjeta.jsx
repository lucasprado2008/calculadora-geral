import { useState } from "react";
import { calcularGorjeta } from "../utils/calculosGerais.js";
import { formatarNumero } from "../utils/formatarNumeros.js";

function Gorjeta() {
  const [valorConta, setValorConta] = useState("");
  const [percentualGorjeta, setPercentualGorjeta] = useState("");
  const [totalConta, setTotalConta] = useState(null);

  function calcGorjeta(evento) {
    evento.preventDefault();
    const valor = parseFloat(valorConta);
    const percentual = parseFloat(percentualGorjeta);

    if (isNaN(valor) || isNaN(percentual)) {
      alert("Os números devem ser preenchidos");
      return;
    }

    if (valor < 0 || percentual < 0) {
      alert("Os valores não podem ser negativos");
      return;
    }

    const total = calcularGorjeta(valor, percentual);
    setTotalConta(total);
  }

  return (
    <section className="calc-page">
      <h2>Calcular Gorjeta</h2>
      <form onSubmit={calcGorjeta} className="form">
        <label htmlFor="valor">Valor conta:</label>
        <input
          id="valor"
          type="number"
          value={valorConta}
          onChange={(e) => setValorConta(e.target.value)}
        />

        <label htmlFor="percentual">Percentual da Gorjeta:</label>
        <input
          id="percentual"
          type="number"
          value={percentualGorjeta}
          onChange={(e) => setPercentualGorjeta(e.target.value)}
        />

        <button type="submit">Calcular</button>
      </form>

      {totalConta !== null && (
        <div className="results">
          <p>
            Total da conta: <strong>R${formatarNumero(totalConta)}</strong>
          </p>
        </div>
      )}
    </section>
  );
}

export default Gorjeta;
