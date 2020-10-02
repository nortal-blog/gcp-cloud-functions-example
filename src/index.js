
const express = require('express');
const app = express();

app.use(express.json());

const repository = require('./repository');

app.get('/', (req, res) => {
  res.status(200).end();
});

app.get('/todos', async (req, res) => {
  res.status(200).json(await repository.getAll());
});

app.post('/todos', async (req, res) => {
  const todo = req.body;
  const response = await repository.createNew(todo);
  res.status(201).json(response);
});

app.put('/todos/:id', async (req, res) => {
  const response = await repository.update(req.params.id, req.body);
  res.status(200).json(response);
});

exports.app = app; 