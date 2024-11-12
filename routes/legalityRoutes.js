const express = require('express');
const router = express.Router();
const legalityController = require('../controllers/legalityController');
const upload = require('../utils/fileUpload');

/**
 * @swagger
 * /api/legality/create-legality:
 *   post:
 *     summary: Create a new Legality record
 *     description: Create a new legality record with various files and comments.
 *     tags:
 *       - Legality
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               land_documents_file:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *               pattadhar_passbook_file:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *               // Define other document fields here
 *               owner_kyc_video_file:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *     responses:
 *       201:
 *         description: Legality created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */
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

module.exports = router;
