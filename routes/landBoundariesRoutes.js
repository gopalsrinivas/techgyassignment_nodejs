const express = require('express');
const router = express.Router();
const landBoundariesController = require('../controllers/landBoundariesController');
const upload = require('../utils/fileUpload');

router.post('/create-land-boundaries', upload.fields([
    { name: 'land_images_file', maxCount: 10 },
    { name: 'landscape_view_of_farmland_file', maxCount: 10 },
    { name: 'masterplan_file', maxCount: 10 },
    { name: 'private_survey_file', maxCount: 10 },
    { name: 'government_survey_file', maxCount: 10 }
]), landBoundariesController.createLandBoundaries);

module.exports = router;
