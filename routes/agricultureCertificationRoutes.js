const express = require('express');
const router = express.Router();
const agricultureCertificationController = require('../controllers/agricultureCertificationController');
const upload = require('../utils/fileUpload');

router.post('/create-certification', upload.fields([
    { name: 'local_agriculture_officer_report_file', maxCount: 10 },
    { name: 'last_5_years_crop_yielding_report_file', maxCount: 10 },
    { name: 'soil_file', maxCount: 10 },
    { name: 'types_of_crop_file', maxCount: 10 },
    { name: 'ground_water_level_file', maxCount: 10 },
    { name: 'suggested_crop_file', maxCount: 10 }
]), agricultureCertificationController.createAgricultureCertification);

router.get('/all-certifications', agricultureCertificationController.getAllAgricultureCertifications);

router.put('/update-certification/:id', agricultureCertificationController.updateAgricultureCertification);

module.exports = router;
