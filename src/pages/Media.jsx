import { useState } from "react";
import { mediaNotas } from "../utils/calculosGerais.js";
import { formatarNumero } from "../utils/formatarNumeros.js";

function Media() {
  const [nota1, setNota1] = useState("");
  const [nota2, setNota2] = useState("");
  const [nota3, setNota3] = useState("");
  const [media, setMedia] = useState(null);

  function calcularMedia(evento) {
    evento.preventDefault();
    const n1 = parseFloat(nota1);
    const n2 = parseFloat(nota2);
    const n3 = parseFloat(nota3);

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
      alert("Os números devem ser preenchidos");
      return;
    }

    if (n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10 || n3 < 0 || n3 > 10) {
      alert("A nota deve estar entre 0 e 10");
      return;
    }

    const calcMedia = mediaNotas(n1, n2, n3);
    setMedia(calcMedia);
  }

  return (
    <section className="calc-page">
      <h2>Média de notas</h2>
      <form onSubmit={calcularMedia} className="form">
        <label htmlFor="nota1">Primeira nota:</label>
        <input
          id="nota1"
          type="number"
          value={nota1}
          onChange={(e) => setNota1(e.target.value)}
        />

        <label htmlFor="nota2">Segunda nota:</label>
        <input
          id="nota2"
          type="number"
          value={nota2}
          onChange={(e) => setNota2(e.target.value)}
        />

        <label htmlFor="nota3">Terceira nota:</label>
        <input
          id="nota3"
          type="number"
          value={nota3}
          onChange={(e) => setNota3(e.target.value)}
        />

        <button type="submit">Calcular</button>
      </form>

      {media !== null && (
        <div className="results">
          <p>
            Média: <strong>{formatarNumero(media)}</strong>
          </p>
        </div>
      )}
    </section>
  );
}

export default Media;
