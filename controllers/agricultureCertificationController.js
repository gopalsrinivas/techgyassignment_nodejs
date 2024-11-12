// D:\Projects\Task\techgyassignment_nodejs\controllers\agricultureCertificationController.js
const AgricultureCertification = require('../models/AgricultureCertification');

const createAgricultureCertification = async (req, res) => {
    try {
        const {
            local_agriculture_officer_report_comments,
            last_5_years_crop_yielding_report_comments,
            soil,
            soil_comments,
            types_of_crop,
            types_of_crop_comments,
            types_of_crop_can_be_grown,
            types_of_crop_can_be_grown_comments,
            ground_water_level,
            ground_water_level_comments,
            current_yielding_cost,
            current_returns_from_yield,
            current_yielding_cost_comments,
            current_cultivation,
            current_cultivation_name,
            current_cultivation_contact_details,
            current_cultivation_comments,
            natural_advantages_disadvantages_comments,
            future_crop_plans_comments,
            suggested_crop_by_green_land,
            best_returns,
            suggested_crop_comments
        } = req.body;

        const agricultureCertification = await AgricultureCertification.create({
            local_agriculture_officer_report_file: req.files?.local_agriculture_officer_report_file ? req.files.local_agriculture_officer_report_file.map(file => file.path) : [],
            local_agriculture_officer_report_comments,
            last_5_years_crop_yielding_report_file: req.files?.last_5_years_crop_yielding_report_file ? req.files.last_5_years_crop_yielding_report_file.map(file => file.path) : [],
            last_5_years_crop_yielding_report_comments,
            soil,
            soil_comments,
            types_of_crop,
            types_of_crop_comments,
            types_of_crop_can_be_grown,
            types_of_crop_can_be_grown_comments,
            ground_water_level,
            ground_water_level_comments,
            current_yielding_cost,
            current_returns_from_yield,
            current_yielding_cost_comments,
            current_cultivation,
            current_cultivation_name,
            current_cultivation_contact_details,
            current_cultivation_comments,
            natural_advantages_disadvantages_comments,
            future_crop_plans_comments,
            suggested_crop_by_green_land,
            best_returns,
            suggested_crop_comments
        });

        res.status(201).json({
            status_code: 201,
            message: 'Agriculture certification created successfully',
            data: agricultureCertification
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            message: 'Error creating agriculture certification record',
            error: error.message
        });
    }
};

module.exports = {
    createAgricultureCertification,
};
