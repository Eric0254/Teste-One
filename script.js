const input = document.getElementById("texto");
const output = document.getElementById("resultado");
const buttonCriptografar = document.getElementById("criptografar");
const buttonDescriptografar = document.getElementById("descriptografar");
const buttonCopiar = document.getElementById("copiar");

function criptografar(texto) {
  return texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
}

function descriptografar(texto) {
  return texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}

buttonCriptografar.addEventListener("click", () => {
  const texto = input.value.toLowerCase();
  const criptografado = criptografar(texto);
  output.value = criptografado;
});

buttonDescriptografar.addEventListener("click", () => {
  const texto = input.value.toLowerCase();
  const descriptografado = descriptografar(texto);
  output.value = descriptografado;
});

buttonCopiar.addEventListener("click", () => {
  output.select();
  document.execCommand("copy");
});

