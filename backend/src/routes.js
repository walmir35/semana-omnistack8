const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('Rota GET');
});

routes.post('/devs', (req, res) => {
    return res.json({ ok: req.body });
});

module.exports = routes;