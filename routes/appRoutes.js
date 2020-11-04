const express = require('express'); 
const router = express.Router(); 


const {getAllSuggestions} = require('../controllers/appController')

router.get('/all-suggestions', getAllSuggestions);

module.exports = router;
