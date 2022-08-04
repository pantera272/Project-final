const mongoose = require('mongoose');

const foilShema = new mongoose.Schema({
name: {type: String},
picture: {type: String},
describe: {type: String},
price: {type: String},
});

module.exports = mongoose.model('Foil', foilShema);