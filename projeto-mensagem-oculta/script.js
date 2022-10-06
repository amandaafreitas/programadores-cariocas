//Selecionando os elementos

let btnCesar = document.querySelector("#cesar");
let btnBase64 = document.querySelector("#base");
let incremento = document.querySelector(".incre");
let radioCodificar = document.querySelector("#radioCodificar");
let radioDecodificar = document.querySelector("#radioDecodificar");
let btnCodificar = document.querySelector("#btncodificar");
let btnDecodificar = document.querySelector("#btndecodificar");

//lista de eventos

btnBase64.addEventListener("click", desativaIncremento);
btnCesar.addEventListener("click", ativaIncremento);
radioCodificar.addEventListener("click", ativarBtnCodificar);
radioDecodificar.addEventListener("click", ativarBtnDecodificar);
btnCodificar.addEventListener("click", codificar);
btnDecodificar.addEventListener("click", decodificar);

//funções

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

function codificar() {
  let msgUsuario = document.querySelector("#msg-user").value;
  let inputMsgCodificada = document.querySelector("#msg-criptografada");
  let incrementoInput = Number(document.querySelector("#incremento").value);

  if (document.getElementById("base").checked) {
    let msgBaseCodificada = btoa(msgUsuario);
    inputMsgCodificada.innerHTML = msgBaseCodificada;
  } else if (document.getElementById("cesar").checked) {
    let msgCesarCodificada = "";

    for (let i = 0; i < msgUsuario.length; i++) {
      let idLetra = msgUsuario.charCodeAt(i);
      if (
        (idLetra >= 65 && idLetra <= 90) ||
        (idLetra >= 97 && idLetra <= 122)
      ) {
        msgCesarCodificada += String.fromCharCode(idLetra + incrementoInput);
      } else {
        msgCesarCodificada += msgUsuario[i];
      }
    }

    inputMsgCodificada.innerHTML = msgCesarCodificada;
  }
}

function decodificar() {
  let msgUsuario = document.querySelector("#msg-user").value;
  let inputMsgCodificada = document.querySelector("#msg-criptografada");
  let incrementoInput = Number(document.querySelector("#incremento").value);

  if (document.getElementById("base").checked) {
    let msgBaseDecodificada = window.atob(msgUsuario);
    inputMsgCodificada.innerHTML = msgBaseDecodificada;
  } else if (document.getElementById("cesar").checked) {
    let msgCesarCodificada = "";

    for (let i = 0; i < msgUsuario.length; i++) {
      let idLetra = msgUsuario.charCodeAt(i);
      if (
        (idLetra >= 65 && idLetra <= 90) ||
        (idLetra >= 97 && idLetra <= 122)
      ) {
        msgCesarCodificada += String.fromCharCode(idLetra - incrementoInput);
      } else {
        msgCesarCodificada += msgUsuario[i];
      }
    }

    inputMsgCodificada.innerHTML = msgCesarCodificada;
  }
}
