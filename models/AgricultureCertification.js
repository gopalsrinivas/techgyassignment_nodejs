// D:\Projects\Task\techgyassignment_nodejs\models\AgricultureCertification.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const AgricultureCertification = sequelize.define('AgricultureCertification', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    local_agriculture_officer_report_file: {
        type: DataTypes.JSONB,
    },
    local_agriculture_officer_report_comments: {
        type: DataTypes.TEXT,
    },
    last_5_years_crop_yielding_report_file: {
        type: DataTypes.JSONB,
    },
    last_5_years_crop_yielding_report_comments: {
        type: DataTypes.TEXT,
    },
    soil: {
        type: DataTypes.TEXT,
    },
    soil_comments: {
        type: DataTypes.TEXT,
    },
    types_of_crop: {
        type: DataTypes.TEXT,
    },
    types_of_crop_comments: {
        type: DataTypes.TEXT,
    },
    types_of_crop_can_be_grown: {
        type: DataTypes.TEXT,
    },
    types_of_crop_can_be_grown_comments: {
        type: DataTypes.TEXT,
    },
    ground_water_level: {
        type: DataTypes.TEXT,
    },
    ground_water_level_comments: {
        type: DataTypes.TEXT,
    },
    current_yielding_cost: {
        type: DataTypes.INTEGER,
    },
    current_returns_from_yield: {
        type: DataTypes.INTEGER,
    },
    current_yielding_cost_comments: {
        type: DataTypes.TEXT,
    },
    current_cultivation: {
        type: DataTypes.STRING,
    },
    current_cultivation_name: {
        type: DataTypes.STRING,
    },
    current_cultivation_contact_details: {
        type: DataTypes.STRING,
    },
    current_cultivation_comments: {
        type: DataTypes.TEXT,
    },
    natural_advantages_disadvantages_comments: {
        type: DataTypes.TEXT,
    },
    future_crop_plans_comments: {
        type: DataTypes.TEXT,
    },
    suggested_crop_by_green_land: {
        type: DataTypes.TEXT,
    },
    best_returns: {
        type: DataTypes.INTEGER,
    },
    suggested_crop_comments: {
        type: DataTypes.TEXT,
    },
}, {
    tableName: 'agriculture_certification'
});

module.exports = AgricultureCertification;
