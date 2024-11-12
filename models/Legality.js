const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Legality = sequelize.define('Legality', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    land_documents_file: {
        type: DataTypes.JSONB,
    },
    land_documents_comment: {
        type: DataTypes.TEXT,
    },
    pattadhar_passbook_file: {
        type: DataTypes.JSONB,
    },
    pattadhar_passbook_comment: {
        type: DataTypes.TEXT,
    },
    link_documents_file: {
        type: DataTypes.JSONB,
    },
    link_documents_comment: {
        type: DataTypes.TEXT,
    },
    kasara_pahani_file: {
        type: DataTypes.JSONB,
    },
    kasara_pahani_comment: {
        type: DataTypes.TEXT,
    },
    encumbrance_certificate_file: {
        type: DataTypes.JSONB,
    },
    encumbrance_comment: {
        type: DataTypes.TEXT,
    },
    revenue_record_file: {
        type: DataTypes.JSONB,
    },
    revenue_record_comment: {
        type: DataTypes.TEXT,
    },
    partition_deed_file: {
        type: DataTypes.JSONB,
    },
    partition_comment: {
        type: DataTypes.TEXT,
    },
    faisal_patti_file: {
        type: DataTypes.JSONB,
    },
    faisal_patti_comment: {
        type: DataTypes.TEXT,
    },
    death_certificate_file: {
        type: DataTypes.JSONB,
    },
    death_certificate_comment: {
        type: DataTypes.TEXT,
    },
    lease_agreement_file: {
        type: DataTypes.JSONB,
    },
    lease_agreement_comment: {
        type: DataTypes.TEXT,
    },
    legal_opinion_report_file: {
        type: DataTypes.JSONB,
    },
    legal_opinion_comment: {
        type: DataTypes.TEXT,
    },
    land_coordinates_file: {
        type: DataTypes.JSONB,
    },
    land_coordinates_comment_file: {
        type: DataTypes.TEXT,
    },
    owner_kyc_video_file: {
        type: DataTypes.JSONB,
    },
    owner_kyc_video_comment: {
        type: DataTypes.TEXT,
    },
}, {
    tableName: 'legalities'
});

module.exports = Legality;
