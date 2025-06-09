const express = require('express');
const app = express();

const PORT = 3000;

// Middleware para aceitar JSON (não obrigatório nesse caso)
app.use(express.json());

// Rota /ola/:nome
app.get('/ola/:nome', (req, res) => {
  const nome = req.params.nome;
  res.send(`Olá, ${nome}!`);
});

// Rota /boa-noite/:nome
app.get('/boa-noite/:nome', (req, res) => {
  const nome = req.params.nome;
  res.send(`Boa noite, ${nome}!`);
});

// Rota /saudacao/:nome
app.get('/saudacao/:nome', (req, res) => {
  const nome = req.params.nome;
  const hora = new Date().getHours();

  if (hora >= 6 && hora < 18) {
    res.send(`Bom dia, ${nome}!`);
  } else {
    res.send(`Boa noite, ${nome}!`);
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
