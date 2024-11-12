// D:\Projects\Task\techgyassignment_nodejs\routes\agricultureCertificationRoutes.js
const express = require('express');
const router = express.Router();
const agricultureCertificationController = require('../controllers/agricultureCertificationController');
const upload = require('../utils/fileUpload');

/**
 * @swagger
 * /api/agriculture-certification/create-certification:
 *   post:
 *     summary: Create a new Agriculture Certification record
 *     description: Create a new agriculture certification record with various files and comments.
 *     tags:
 *       - Agriculture Certification
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               local_agriculture_officer_report_file:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *               last_5_years_crop_yielding_report_file:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *               // Define other document fields here
 *               suggested_crop_comments:
 *                 type: string
 *     responses:
 *       201:
 *         description: Agriculture certification created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */
router.post('/create-certification', upload.fields([
    { name: 'local_agriculture_officer_report_file', maxCount: 10 },
    { name: 'last_5_years_crop_yielding_report_file', maxCount: 10 },
    { name: 'soil_file', maxCount: 10 },
    { name: 'types_of_crop_file', maxCount: 10 },
    { name: 'ground_water_level_file', maxCount: 10 },
    { name: 'suggested_crop_file', maxCount: 10 }
]), agricultureCertificationController.createAgricultureCertification);

module.exports = router;
