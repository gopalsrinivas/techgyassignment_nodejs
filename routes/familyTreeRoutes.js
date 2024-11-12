const express = require('express');
const router = express.Router();
const familyTreeController = require('../controllers/familyTreeController');


router.post('/create-family-tree', familyTreeController.createFamilyTree);

module.exports = router;
