const objetos = [
  {
    macas: 3,
    peras: 2,
    carne: 1,
    frango: 5,
    doces: 2,
  },
  {
    macas: 1,
    cafe: 1,
    ovos: 6,
    frango: 1,
    paes: 4,
  },
];

const tiposProdutos = [];

for (const objeto of objetos) {
  const produtos = Object.keys(objeto);
  for (const produto of produtos) {
    if (!tiposProdutos.includes(produto)) {
      tiposProdutos.push(produto);
    }
  }
}

console.log(tiposProdutos);

let totalVendido = 0;
for (const objeto of objetos) {
  const valores = Object.values(objeto);
  for (const valor of valores) {
    totalVendido += valor;
  }
}

console.log("Foram vendidos " + totalVendido + " produtos.");
