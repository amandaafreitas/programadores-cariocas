import fetch from "node-fetch";

const filme = {
  titulo: "Lilo,Lilo,Crocodilo",
  ano: 2021,
  direcao: "Josh Gordon, Will Speck",
  id: 3,
};

fetch(`http://localhost:3200/filmes/${filme.id}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(filme),
})
  .then((resposta) => console.log("Sucesso!"))
  .catch((erro) => {
    console.log(`erro: ${erro}`);
  });
