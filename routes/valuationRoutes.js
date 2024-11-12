const express = require('express');
const router = express.Router();
const valuationController = require('../controllers/valuationController');
const upload = require('../utils/fileUpload');

/**
 * @swagger
 * /api/valuation/create-valuation:
 *   post:
 *     summary: Create a new Valuation record
 *     description: Create a new valuation record with various files and comments.
 *     tags:
 *       - Valuation
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               village_map_or_naksha_file:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *               sub_register_value_file:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *               // Define other document fields here
 *               airport_connectivity:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Valuation created successfully
 *       500:
 *         description: Server error
 */
router.post('/create-valuation', upload.fields([
    { name: 'village_map_or_naksha_file', maxCount: 10 },
    { name: 'sub_register_value_file', maxCount: 10 },
    { name: 'valuator_report_file', maxCount: 10 },
    { name: 'land_owner_value_file', maxCount: 10 },
]), valuationController.createValuation);

module.exports = router;
