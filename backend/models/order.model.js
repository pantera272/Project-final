const mongoose = require('mongoose');

const orderShema = new mongoose.Schema({
name: {type: String, maxLenght: 50},
street: {type: String, maxLenght: 20},
city: {type: String, maxLenght: 20},
zipCode: {type: String},
email: {type: String, maxLenght: 30},
phone: {type: String, minLenght: 9, maxLenght: 12},
orderElements:[{
  long: {type: Number},
  width: {type: Number},
  id: {type: String},
  name: {type: String},
  price: {type: String},
  shapeSill: {type: String},
  thicknessSill: {type: String},
  windowSill: {type: String}
}]
});

module.exports = mongoose.model('Order', orderShema);