const mongoose = require('mongoose');



const characterSchema = new mongoose.Schema({
    alias: { type: String},
    powers: {type: String},
    image: {type: String},
});

module.exports = mongoose.model('character', characterSchema);