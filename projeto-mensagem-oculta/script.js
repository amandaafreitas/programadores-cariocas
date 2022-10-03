function cifraDeCesar(frase) {
  let nomeCodificado = "";
  let posicoes = 2;

  for (let i = 0; i < frase.length; i++) {
    let idLetra = frase.charCodeAt(i);
    if ((idLetra >= 65 && idLetra <= 90) || (idLetra >= 97 && idLetra <= 122)) {
      nomeCodificado += String.fromCharCode(idLetra + posicoes);
    } else {
      nomeCodificado += frase[i];
    }
  }

  return nomeCodificado;
}

console.log(cifraDeCesar("Oi, eu sou um dev!"));
