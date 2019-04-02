let express = require('express');
let router = express.Router();
 
let reviews = require('../controllers/reviews.controller.js');
 
// Create a new review
router.post('/api/reviews', reviews.create);
 
// Retrieve all reiews
router.get('/api/reviews', reviews.findAll);
 
// Retrieve a single review by Id
router.get('/api/reviews/:id', reviews.findOne);