function verificarValor(valorFalado) {
  const numeroFalado = +valorFalado;
  const dica = document.querySelector("#dica");

  if (chuteInvalido(numeroFalado)) {
    dica.innerHTML = "A sua resposta precisa ser um número!";
  }

  if (numeroForaDosLimites(numeroFalado)) {
    dica.innerHTML = `Número fora dos limites! O valor precisa estar entre ${menorValor} e ${maiorValor}`;
  } else {
    if (numeroFalado > numeroSecreto) {
      dica.innerHTML = `O numero secreto é menor`;
    }
    if (numeroFalado < numeroSecreto) {
      dica.innerHTML = `O numero secreto é maior`;
    }
  }

  if (numeroSecreto === numeroFalado) {
    exibirResposta(numeroSecreto);
  }
}

function chuteInvalido(numero) {
  return Number.isNaN(numero);
}

function numeroForaDosLimites(numero) {
  return numero > maiorValor || numero < menorValor;
}

function exibirResposta(numeroSecreto) {
  document.querySelector("#main").innerHTML = ` 
  <h1 class="titulo-box" >Parabéns voce acertou o número secreto!</h1>
  <h1>O valor era ${numeroSecreto}</h1>`;
}
