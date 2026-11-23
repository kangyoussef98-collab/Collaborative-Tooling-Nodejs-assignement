const express = require('express');
const itemService = require('../services/item.service');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    res.status(201).json(await itemService.create(req.body));
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (_req, res) => {
  res.json(await itemService.getAll());
});

router.get('/:id', async (req, res) => {
  const item = await itemService.getById(req.params.id);
  return item ? res.json(item) : res.status(404).json({ error: 'Not found' });
});

router.put('/:id', async (req, res) => {
  const item = await itemService.update(req.params.id, req.body);
  return item ? res.json(item) : res.status(404).json({ error: 'Not found' });
});

router.delete('/:id', async (req, res) => {
  const item = await itemService.remove(req.params.id);
  return item ? res.status(204).send() : res.status(404).json({ error: 'Not found' });
});

module.exports = router;
