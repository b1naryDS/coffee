const mongoose = require('mongoose');

const kavaSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    grade: Number,
    id: Number
});

module.exports = mongoose.model('Kava', kavaSchema);