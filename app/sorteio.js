const menorValor = 1;
const maiorValor = 100;
const numeroSecreto = gerarNumero();

document.querySelector("#btn").addEventListener("click", (event) => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    document.querySelector(".fa-moon").classList.replace("fa-moon", "fa-sun");
  } else {
    document.querySelector(".fa-sun").classList.replace("fa-sun", "fa-moon");
  }
});

document.querySelector("#btnRestart").addEventListener("click", (event) => {
  window.location.reload();
});

document.querySelector("#menor-valor").innerHTML = menorValor;
document.querySelector("#maior-valor").innerHTML = maiorValor;

function gerarNumero() {
  return parseInt(Math.random() * maiorValor + 1);
}

console.log(`O numero secreto é: ${numeroSecreto}`);
