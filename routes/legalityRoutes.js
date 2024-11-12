const express = require('express');
const router = express.Router();
const legalityController = require('../controllers/legalityController');
const upload = require('../utils/fileUpload');

router.post('/create-legality', upload.fields([
    { name: 'land_documents_file', maxCount: 10 },
    { name: 'pattadhar_passbook_file', maxCount: 10 },
    { name: 'link_documents_file', maxCount: 10 },
    { name: 'kasara_pahani_file', maxCount: 10 },
    { name: 'encumbrance_certificate_file', maxCount: 10 },
    { name: 'revenue_record_file', maxCount: 10 },
    { name: 'partition_deed_file', maxCount: 10 },
    { name: 'faisal_patti_file', maxCount: 10 },
    { name: 'death_certificate_file', maxCount: 10 },
    { name: 'lease_agreement_file', maxCount: 10 },
    { name: 'legal_opinion_report_file', maxCount: 10 },
    { name: 'land_coordinates_file', maxCount: 10 },
    { name: 'owner_kyc_video_file', maxCount: 10 },
]), legalityController.createLegality);

router.get('/all-legality', legalityController.getAllLegalityRecords);

module.exports = router;
