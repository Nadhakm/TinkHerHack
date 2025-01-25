const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
    user_id: String,
    timestamp: Date,
    location: {
        latitude: Number,
        longitude: Number,
        address: String,
        osm_data: Object,
    },
    recipients_notified: [
        {
            recipient_id: String,
            name: String,
            phone: String,
        },
    ],
});

module.exports = mongoose.model('Log', logSchema);
