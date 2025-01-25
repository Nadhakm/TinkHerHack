const express = require('express');
const router = express.Router();
const Recipient = require('../models/Recipient');

// Add recipient
router.post('/', async (req, res) => {
    try {
        const recipient = new Recipient(req.body);
        await recipient.save();
        res.status(201).json(recipient);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
