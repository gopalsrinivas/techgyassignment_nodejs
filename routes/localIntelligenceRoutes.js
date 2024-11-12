// D:\Projects\Task\techgyassignment_nodejs\routes\localIntelligenceRoutes.js
const express = require('express');
const router = express.Router();
const localIntelligenceController = require('../controllers/localIntelligenceController');

/**
 * @swagger
 * /api/local-intelligence/create-local-intelligence:
 *   post:
 *     summary: Create a new LocalIntelligence record
 *     description: Create a new local intelligence record with various fields.
 *     tags:
 *       - LocalIntelligence
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               issues_with_boundaries_and_owners:
 *                 type: string
 *               issues_with_boundaries_and_owners_comments:
 *                 type: string
 *               local_liabilities:
 *                 type: string
 *               local_liabilities_comments:
 *                 type: string
 *               bank_loans_or_pending_loans:
 *                 type: string
 *               loan_amount:
 *                 type: integer
 *               bank_loans_or_pending_loans_comments:
 *                 type: string
 *               owner_mindset:
 *                 type: string
 *               owner_mindset_comments:
 *                 type: string
 *               source_person:
 *                 type: string
 *               source_person_name:
 *                 type: string
 *               source_person_contact_details:
 *                 type: string
 *               source_person_comments:
 *                 type: string
 *               paper_agreement:
 *                 type: string
 *               agreement_type:
 *                 type: string
 *               last_price_of_land:
 *                 type: integer
 *               paper_agreement_comments:
 *                 type: string
 *               previous_transactions_on_land:
 *                 type: string
 *               previous_transaction_amount:
 *                 type: integer
 *               previous_transaction_comments:
 *                 type: string
 *     responses:
 *       201:
 *         description: Local intelligence created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */
router.post('/create-local-intelligence', localIntelligenceController.createLocalIntelligence);

module.exports = router;
