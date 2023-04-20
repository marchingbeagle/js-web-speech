window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = "pt-br";
recognition.start();

recognition.addEventListener("result", ativarReconhecimento);
recognition.addEventListener("end", () => {
  recognition.start();
});
function ativarReconhecimento(event) {
  const valorFalado = event.results[0][0].transcript;
  exibeValor(valorFalado);
  verificarValor(valorFalado);
}

function exibeValor(valorFalado) {
  document.querySelector("#boxResposta").innerHTML = valorFalado;
}
