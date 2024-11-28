const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Dados iniciais (pode ser substituído por valores reais dos sensores)
let sensorData = {
  temperatura: 25.5,
  umidade: 60,
  luz: 300,
};

// Endpoint para obter os dados dos sensores
app.get('/api/dados', (req, res) => {
  res.json(sensorData);
});

// Endpoint para atualizar os dados dos sensores (simulando entrada dos sensores)
app.post('/api/dados', (req, res) => {
  const { temperatura, umidade, luz } = req.body;

  if (temperatura !== undefined) sensorData.temperatura = temperatura;
  if (umidade !== undefined) sensorData.umidade = umidade;
  if (luz !== undefined) sensorData.luz = luz;

  res.status(200).json({ message: 'Dados atualizados com sucesso!', sensorData });
});

// Rota padrão (opcional)
app.get('/', (req, res) => {
  res.send('<h1>Backend da Estufa IoT</h1><p>Acesse /api/dados para obter os dados.</p>');
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
