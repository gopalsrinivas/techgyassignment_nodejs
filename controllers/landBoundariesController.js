const LandBoundaries = require('../models/LandBoundaries');

const createLandBoundaries = async (req, res) => {
    try {
        const {
            land_images_comments, slope_side, slope_side_comments,
            shape_of_land, shape_of_land_comment, water_and_electricity_facility,
            water_facility, electricity_facility, water_and_electricity_facility_comments,
            masterplan_comments, east_boundaries_select, east_owner_name, east_age,
            east_boundaries_comments, west_boundaries_select, type_of_road, width_of_road,
            west_boundaries_comments, north_boundaries_select, tree_count,
            north_boundaries_comments, south_boundaries_select, south_boundaries_comments,
            survey_report, private_survey_number, government_survey_number, survey_report_comments
        } = req.body;

        const landBoundaries = await LandBoundaries.create({
            land_images_file: req.files?.land_images_file ? req.files.land_images_file.map(file => file.path) : [],
            land_images_comments,
            landscape_view_of_farmland_file: req.files?.landscape_view_of_farmland_file ? req.files.landscape_view_of_farmland_file.map(file => file.path) : [],
            slope_side,
            slope_side_comments,
            shape_of_land,
            shape_of_land_comment,
            water_and_electricity_facility,
            water_facility,
            electricity_facility,
            water_and_electricity_facility_comments,
            masterplan_file: req.files?.masterplan_file ? req.files.masterplan_file.map(file => file.path) : [],
            masterplan_comments,
            east_boundaries_select,
            east_owner_name,
            east_age,
            east_boundaries_comments,
            west_boundaries_select,
            type_of_road,
            width_of_road,
            west_boundaries_comments,
            north_boundaries_select,
            tree_count,
            north_boundaries_comments,
            south_boundaries_select,
            south_boundaries_comments,
            survey_report,
            private_survey_file: req.files?.private_survey_file ? req.files.private_survey_file.map(file => file.path) : [],
            private_survey_number,
            government_survey_file: req.files?.government_survey_file ? req.files.government_survey_file.map(file => file.path) : [],
            government_survey_number,
            survey_report_comments
        });

        res.status(201).json({
            status_code: 201,
            message: "Land Boundaries created successfully",
            data: landBoundaries
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            message: 'Error creating land boundaries record',
            error: error.message
        });
    }
};

module.exports = { createLandBoundaries };
