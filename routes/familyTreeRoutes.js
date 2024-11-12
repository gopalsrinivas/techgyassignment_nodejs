const express = require('express');
const router = express.Router();
const familyTreeController = require('../controllers/familyTreeController');

router.post('/create-family-tree', familyTreeController.createFamilyTree);
router.get('/all-family-tree', familyTreeController.getAllFamilyTreeRecords);
router.put('/update-family-tree/:id', familyTreeController.updateFamilyTree);


module.exports = router;
