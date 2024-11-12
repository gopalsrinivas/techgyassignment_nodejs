const express = require('express');
const router = express.Router();
const localIntelligenceController = require('../controllers/localIntelligenceController');

router.post('/create-local-intelligence', localIntelligenceController.createLocalIntelligence);


router.get('/get-all', localIntelligenceController.getAllLocalIntelligence);

router.put('/update/:id', localIntelligenceController.updateLocalIntelligence);

module.exports = router;
