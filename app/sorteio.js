const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = gerarNumero();

document.querySelector("#btn").addEventListener("click", (event) => {
  document.body.classList.toggle("dark-mode");
});

document.querySelector("#menor-valor").innerHTML = menorValor;
document.querySelector("#maior-valor").innerHTML = maiorValor;

function gerarNumero() {
  return parseInt(Math.random() * maiorValor + 1);
}
console.log(numeroSecreto);
