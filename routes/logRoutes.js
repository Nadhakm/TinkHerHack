const express = require('express');
const router = express.Router();
const Log = require('../models/Log');

// Log location
router.post('/', async (req, res) => {
    try {
        const log = new Log(req.body);
        await log.save();
        res.status(201).json(log);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
