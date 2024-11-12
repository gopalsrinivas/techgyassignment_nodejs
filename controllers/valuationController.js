const Valuation = require('../models/Valuation');

const createValuation = async (req, res) => {
    try {
        const {
            village_map_or_naksha_comments,
            sub_register_value_comments,
            valuator_report_comments,
            land_owner_value_comments,
            road_approach_type,
            road_width,
            road_approach_comments,
            water_facility,
            primary_source_of_land,
            water_facility_comments,
            recent_transaction_in_surrounding,
            valuation_per_acre,
            local_market_acre_price,
            recent_transaction_comments,
            electricity_facility,
            electricity_comments,
            existing_trees,
            tree_count,
            trees_comments,
            surrounding_mines,
            mines_comments,
            disadvantages_comments,
            future_plans_comments,
            upcoming_infrastructures,
            infrastructures_list,
            infrastructures_comments,
            railway_connectivity,
            railway_distance,
            railway_comments,
            airport_connectivity,
            airport_distance,
            airport_comments
        } = req.body;

        const valuation = await Valuation.create({
            village_map_or_naksha_file: req.files?.village_map_or_naksha_file ? req.files.village_map_or_naksha_file.map(file => file.path) : [],
            village_map_or_naksha_comments,
            sub_register_value_file: req.files?.sub_register_value_file ? req.files.sub_register_value_file.map(file => file.path) : [],
            sub_register_value_comments,
            valuator_report_file: req.files?.valuator_report_file ? req.files.valuator_report_file.map(file => file.path) : [],
            valuator_report_comments,
            land_owner_value_file: req.files?.land_owner_value_file ? req.files.land_owner_value_file.map(file => file.path) : [],
            land_owner_value_comments,
            road_approach_type,
            road_width,
            road_approach_comments,
            water_facility,
            primary_source_of_land,
            water_facility_comments,
            recent_transaction_in_surrounding,
            valuation_per_acre,
            local_market_acre_price,
            recent_transaction_comments,
            electricity_facility,
            electricity_comments,
            existing_trees,
            tree_count,
            trees_comments,
            surrounding_mines,
            mines_comments,
            disadvantages_comments,
            future_plans_comments,
            upcoming_infrastructures,
            infrastructures_list,
            infrastructures_comments,
            railway_connectivity,
            railway_distance,
            railway_comments,
            airport_connectivity,
            airport_distance,
            airport_comments
        });

        res.status(201).json({
            status_code: 201,
            message: 'Valuation created successfully',
            data: valuation
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            message: 'Error creating valuation record',
            error: error.message
        });
    }
};

const getAllValuations = async (req, res) => {
    try {
        const valuations = await Valuation.findAll();
        res.status(200).json({
            status_code: 200,
            message: 'All valuations retrieved successfully',
            data: valuations,
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            message: 'Error retrieving valuation records',
            error: error.message,
        });
    }
};

const updateValuation = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        if (req.files) {
            updatedData.village_map_or_naksha_file = req.files.village_map_or_naksha_file
                ? req.files.village_map_or_naksha_file.map(file => file.path)
                : [];
            updatedData.sub_register_value_file = req.files.sub_register_value_file
                ? req.files.sub_register_value_file.map(file => file.path)
                : [];
            updatedData.valuator_report_file = req.files.valuator_report_file
                ? req.files.valuator_report_file.map(file => file.path)
                : [];
            updatedData.land_owner_value_file = req.files.land_owner_value_file
                ? req.files.land_owner_value_file.map(file => file.path)
                : [];
        }

        const valuation = await Valuation.findByPk(id);
        if (!valuation) {
            return res.status(404).json({
                status_code: 404,
                message: 'Valuation record not found',
            });
        }

        await valuation.update(updatedData);

        res.status(200).json({
            status_code: 200,
            message: 'Valuation updated successfully',
            data: valuation,
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            message: 'Error updating valuation record',
            error: error.message,
        });
    }
};

module.exports = {
    createValuation,
    getAllValuations,
    updateValuation,
};