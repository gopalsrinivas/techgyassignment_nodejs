// D:\Projects\Task\techgyassignment_nodejs\controllers\localIntelligenceController.js
const LocalIntelligence = require('../models/LocalIntelligence');

const createLocalIntelligence = async (req, res) => {
    try {
        const {
            issues_with_boundaries_and_owners,
            issues_with_boundaries_and_owners_comments,
            local_liabilities,
            local_liabilities_comments,
            bank_loans_or_pending_loans,
            loan_amount,
            bank_loans_or_pending_loans_comments,
            owner_mindset,
            owner_mindset_comments,
            source_person,
            source_person_name,
            source_person_contact_details,
            source_person_comments,
            paper_agreement,
            agreement_type,
            last_price_of_land,
            paper_agreement_comments,
            previous_transactions_on_land,
            previous_transaction_amount,
            previous_transaction_comments
        } = req.body;

        const localIntelligence = await LocalIntelligence.create({
            issues_with_boundaries_and_owners,
            issues_with_boundaries_and_owners_comments,
            local_liabilities,
            local_liabilities_comments,
            bank_loans_or_pending_loans,
            loan_amount,
            bank_loans_or_pending_loans_comments,
            owner_mindset,
            owner_mindset_comments,
            source_person,
            source_person_name,
            source_person_contact_details,
            source_person_comments,
            paper_agreement,
            agreement_type,
            last_price_of_land,
            paper_agreement_comments,
            previous_transactions_on_land,
            previous_transaction_amount,
            previous_transaction_comments
        });

        res.status(201).json({
            status_code: 201,
            message: 'Local intelligence created successfully',
            data: localIntelligence
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            message: 'Error creating local intelligence record',
            error: error.message
        });
    }
};

module.exports = {
    createLocalIntelligence,
};
