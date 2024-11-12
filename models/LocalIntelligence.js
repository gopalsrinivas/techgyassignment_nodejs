// D:\Projects\Task\techgyassignment_nodejs\models\LocalIntelligence.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const LocalIntelligence = sequelize.define('LocalIntelligence', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    issues_with_boundaries_and_owners: {
        type: DataTypes.STRING,
    },
    issues_with_boundaries_and_owners_comments: {
        type: DataTypes.TEXT,
    },
    local_liabilities: {
        type: DataTypes.STRING,
    },
    local_liabilities_comments: {
        type: DataTypes.TEXT,
    },
    bank_loans_or_pending_loans: {
        type: DataTypes.STRING,
    },
    loan_amount: {
        type: DataTypes.INTEGER,
    },
    bank_loans_or_pending_loans_comments: {
        type: DataTypes.TEXT,
    },
    owner_mindset: {
        type: DataTypes.STRING,
    },
    owner_mindset_comments: {
        type: DataTypes.TEXT,
    },
    source_person: {
        type: DataTypes.STRING,
    },
    source_person_name: {
        type: DataTypes.STRING,
    },
    source_person_contact_details: {
        type: DataTypes.STRING,
    },
    source_person_comments: {
        type: DataTypes.TEXT,
    },
    paper_agreement: {
        type: DataTypes.STRING,
    },
    agreement_type: {
        type: DataTypes.STRING,
    },
    last_price_of_land: {
        type: DataTypes.INTEGER,
    },
    paper_agreement_comments: {
        type: DataTypes.TEXT,
    },
    previous_transactions_on_land: {
        type: DataTypes.STRING,
    },
    previous_transaction_amount: {
        type: DataTypes.INTEGER,
    },
    previous_transaction_comments: {
        type: DataTypes.TEXT,
    },
}, {
    tableName: 'local_intelligences'
});

module.exports = LocalIntelligence;
