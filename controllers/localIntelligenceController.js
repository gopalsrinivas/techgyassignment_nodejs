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

const getAllLocalIntelligence = async (req, res) => {
    try {
        const localIntelligenceRecords = await LocalIntelligence.findAll();
        res.status(200).json({
            status_code: 200,
            message: 'Local intelligence records retrieved successfully',
            data: localIntelligenceRecords
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            message: 'Error retrieving local intelligence records',
            error: error.message
        });
    }
};

const updateLocalIntelligence = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        const localIntelligence = await LocalIntelligence.findByPk(id);
        if (!localIntelligence) {
            return res.status(404).json({
                message: 'Local intelligence record not found'
            });
        }

        await localIntelligence.update(updatedData);

        res.status(200).json({
            status_code: 200,
            message: 'Local intelligence record updated successfully',
            data: localIntelligence
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            message: 'Error updating local intelligence record',
            error: error.message
        });
    }
};

module.exports = {
    createLocalIntelligence,
    getAllLocalIntelligence,
    updateLocalIntelligence,
};
