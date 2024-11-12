const Legality = require('../models/Legality');

const createLegality = async (req, res) => {
    try {
        const {
            land_documents_comment,
            pattadhar_passbook_comment,
            link_documents_comment,
            kasara_pahani_comment,
            encumbrance_comment,
            revenue_record_comment,
            partition_comment,
            faisal_patti_comment,
            death_certificate_comment,
            lease_agreement_comment,
            legal_opinion_comment,
            land_coordinates_comment_file,
            owner_kyc_video_comment
        } = req.body;

        const legality = await Legality.create({
            land_documents_file: req.files?.land_documents_file ? req.files.land_documents_file.map(file => file.path) : [],
            land_documents_comment,
            pattadhar_passbook_file: req.files?.pattadhar_passbook_file ? req.files.pattadhar_passbook_file.map(file => file.path) : [],
            pattadhar_passbook_comment,
            link_documents_file: req.files?.link_documents_file ? req.files.link_documents_file.map(file => file.path) : [],
            link_documents_comment,
            kasara_pahani_file: req.files?.kasara_pahani_file ? req.files.kasara_pahani_file.map(file => file.path) : [],
            kasara_pahani_comment,
            encumbrance_certificate_file: req.files?.encumbrance_certificate_file ? req.files.encumbrance_certificate_file.map(file => file.path) : [],
            encumbrance_comment,
            revenue_record_file: req.files?.revenue_record_file ? req.files.revenue_record_file.map(file => file.path) : [],
            revenue_record_comment,
            partition_deed_file: req.files?.partition_deed_file ? req.files.partition_deed_file.map(file => file.path) : [],
            partition_comment,
            faisal_patti_file: req.files?.faisal_patti_file ? req.files.faisal_patti_file.map(file => file.path) : [],
            faisal_patti_comment,
            death_certificate_file: req.files?.death_certificate_file ? req.files.death_certificate_file.map(file => file.path) : [],
            death_certificate_comment,
            lease_agreement_file: req.files?.lease_agreement_file ? req.files.lease_agreement_file.map(file => file.path) : [],
            lease_agreement_comment,
            legal_opinion_report_file: req.files?.legal_opinion_report_file ? req.files.legal_opinion_report_file.map(file => file.path) : [],
            legal_opinion_comment,
            land_coordinates_file: req.files?.land_coordinates_file ? req.files.land_coordinates_file.map(file => file.path) : [],
            land_coordinates_comment_file,
            owner_kyc_video_file: req.files?.owner_kyc_video_file ? req.files.owner_kyc_video_file.map(file => file.path) : [],
            owner_kyc_video_comment
        });

        res.status(201).json({
            status_code: 201,
            message: 'Legality created successfully',
            data: legality
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            message: 'Error creating legality record',
            error: error.message
        });
    }
};

module.exports = {
    createLegality,
};
