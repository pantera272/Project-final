const express = require('express');
const router = express.Router();

const Order = require('../models/order.model');

router.post('/orders', async (req,res) => {
  try {
    const { name, street, city, zipCode, email, phone, orderElements } = req.body;

      if(name && street && city && zipCode && email && phone){

      const mailFormat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      const zipCodeFormat = /^[0-9]{2}-[0-9]{3}$/;
      const phoneFormat = /^[0-9\+]{8,13}$/;
      
      if (!email.match(mailFormat)){
        throw new Error('Invalid e-mail address');
      }

      if (!phone.match(phoneFormat)){
        throw new Error('Invalid zip code');
      }
      
      if (!zipCode.match(zipCodeFormat)){
        throw new Error('Invalid zip code');
      }

      const newOrder = new Order({
        name: name,
        street: street,
        city: city,
        zipCode: zipCode,
        email: email,
        phone: phone,
        orderElements: orderElements
      });

      await newOrder.save();
      res.json(newOrder);
    } else {
      throw new Error('Invalid data');
    }
  }
  catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;