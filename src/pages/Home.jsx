export default function Home() {
  return (
    <main className="home">
      <h1 className="home-title">Calculadoras</h1>
      <p className="home-text">
        Este projeto reúne algumas calculadoras simples para praticar navegação
        entre páginas e gerenciamento de rotas com React Router Dom
      </p>
      <p className="home-list-text">Lista de Calculadoras</p>
      <ul className="home-list">
        <li>🌡️ Celsius para Fahrenheit</li>
        <li>📊 Média de notas</li>
        <li>💰 Gorjeta</li>
        <li>🏷️ Desconto</li>
        <li>📐 Área de um cômodo</li>
        <li>⛽ Autonomia de combustível</li>
        <li>📈 Juros simples</li>
        <li>🚗 Quilômetros para milhas</li>
      </ul>
    </main>
  );
}
