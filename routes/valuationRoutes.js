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

/**
 * @swagger
 * /api/valuation:
 *   get:
 *     summary: Get all valuations
 *     description: Retrieve a list of all valuation records.
 *     tags:
 *       - Valuation
 *     responses:
 *       200:
 *         description: A list of valuations
 *       500:
 *         description: Server error
 */
router.get('/', valuationController.getAllValuations);

/**
 * @swagger
 * /api/valuation/{id}:
 *   put:
 *     summary: Update a Valuation record by ID
 *     description: Update a valuation record by ID with optional files and comments.
 *     tags:
 *       - Valuation
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the valuation to update
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
 *     responses:
 *       200:
 *         description: Valuation updated successfully
 *       404:
 *         description: Valuation record not found
 *       500:
 *         description: Server error
 */
router.put('/:id', upload.fields([
    { name: 'village_map_or_naksha_file', maxCount: 10 },
    { name: 'sub_register_value_file', maxCount: 10 },
    { name: 'valuator_report_file', maxCount: 10 },
    { name: 'land_owner_value_file', maxCount: 10 },
]), valuationController.updateValuation);

module.exports = router;
