export function celsiusFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

export function mediaNotas(nota1, nota2, nota3) {
  return (nota1 + nota2 + nota3) / 3;
}

export function calcularGorjeta(valorConta, taxaGorjeta) {
  const gorjeta = valorConta * (taxaGorjeta / 100);
  const total = valorConta + gorjeta;

  return total;
}

export function calcularDesconto(preco, desconto) {
  const valorDesconto = preco * (desconto / 100);
  const precoFinal = preco - valorDesconto;

  return precoFinal;
}

export function calcularArea(largura, comprimento) {
  return largura * comprimento;
}

export function calcularAutonomia(distancia, combustivelGasto) {
  return distancia / combustivelGasto;
}

export function jurosSimples(capital, taxa, tempo) {
  const juros = capital * (taxa / 100) * tempo;
  return capital + juros;
}

export function conversorMilhas(km) {
  return km * 0.621371;
}
