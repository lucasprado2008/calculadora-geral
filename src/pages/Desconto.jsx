import { useState } from "react";
import { calcularDesconto } from "../utils/calculosGerais.js";
import { formatarNumero } from "../utils/formatarNumeros.js";

function Desconto() {
  const [preco, setPreco] = useState("");
  const [desconto, setDesconto] = useState("");
  const [totalFinal, setTotalFinal] = useState(null);

  function calcDesconto(evento) {
    evento.preventDefault();
    const valor = parseFloat(preco);
    const percentual = parseFloat(desconto);

    if (isNaN(valor) || isNaN(percentual)) {
      alert("Os números devem ser preenchidos");
      return;
    }

    if (valor < 0 || percentual < 0) {
      alert("Os valores não podem ser negativos");
      return;
    }

    if (percentual > 100) {
      alert("O percentual não pode ser maior que 100");
      return;
    }

    const total = calcularDesconto(valor, percentual);
    setTotalFinal(total);
  }

  return (
    <section className="calc-page">
      <h2>Calcular Desconto</h2>
      <form onSubmit={calcDesconto} className="form">
        <label htmlFor="valor">Valor a pagar:</label>
        <input
          id="valor"
          type="number"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
        />

        <label htmlFor="percentual">Percentual do Desconto:</label>
        <input
          id="percentual"
          type="number"
          value={desconto}
          onChange={(e) => setDesconto(e.target.value)}
        />

        <button type="submit">Calcular</button>
      </form>

      {totalFinal !== null && (
        <div className="results">
          <p>
            Valor Final: <strong>R${formatarNumero(totalFinal)}</strong>
          </p>
        </div>
      )}
    </section>
  );
}

export default Desconto;
