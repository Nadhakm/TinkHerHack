const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    phone: String,
    address: string,
    recipients: [
        {
            recipient_id: String,
            name: String,
            phone: String,
            email: String,
        },
    ],
});

module.exports = mongoose.model('User', userSchema);
