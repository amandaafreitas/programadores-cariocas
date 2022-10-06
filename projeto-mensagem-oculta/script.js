// Botao de cesar ativo

let btnCesar = document.querySelector("#cesar");
let btnBase64 = document.querySelector("#base");
let incremento = document.querySelector(".incre");
let radioCodificar = document.querySelector("#radioCodificar");
let radioDecodificar = document.querySelector("#radioDecodificar");
let btnCodificar = document.querySelector("#btncodificar");
let btnDecodificar = document.querySelector("#btndecodificar");

btnBase64.addEventListener("click", desativaIncremento);
btnCesar.addEventListener("click", ativaIncremento);
radioCodificar.addEventListener("click", ativarBtnCodificar);
radioDecodificar.addEventListener("click", ativarBtnDecodificar);
btnCodificar.addEventListener("click", codificarCifraDeCesar);

function ativaIncremento() {
  incremento.style.display = "block";
}

function desativaIncremento() {
  incremento.style.display = "none";
}

function ativarBtnCodificar() {
  btnCodificar.style.display = "inline-block";
  btnDecodificar.style.display = "none";
}

function ativarBtnDecodificar() {
  btnDecodificar.style.display = "inline-block";
  btnCodificar.style.display = "none";
}

function codificarCifraDeCesar() {
  let msgUsuario = document.querySelector("#msg-user").value;
  let inputMsgCodificada = document.querySelector("#msg-criptografada");
  let incrementoInput = Number(document.querySelector("#incremento").value);

  let fraseCodificada = "";

  for (let i = 0; i < msgUsuario.length; i++) {
    let idLetra = msgUsuario.charCodeAt(i);
    if ((idLetra >= 65 && idLetra <= 90) || (idLetra >= 97 && idLetra <= 122)) {
      fraseCodificada += String.fromCharCode(idLetra + incrementoInput);
    } else {
      fraseCodificada += msgUsuario[i];
    }
  }

  inputMsgCodificada.innerHTML = fraseCodificada;
}

// function cifraDeCesar(frase) {
//   let fraseCodificada = "";
//   let posicoes = 2;

//   for (let i = 0; i < frase.length; i++) {
//     let idLetra = frase.charCodeAt(i);
//     if ((idLetra >= 65 && idLetra <= 90) || (idLetra >= 97 && idLetra <= 122)) {
//       fraseCodificada += String.fromCharCode(idLetra + posicoes);
//     } else {
//       fraseCodificada += frase[i];
//     }
//   }

//   return fraseCodificada;
// }

// console.log(cifraDeCesar("Oi, eu sou um dev!"));
