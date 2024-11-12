const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Valuation = sequelize.define('Valuation', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    village_map_or_naksha_file: {
        type: DataTypes.JSONB,
    },
    village_map_or_naksha_comments: {
        type: DataTypes.TEXT,
    },
    sub_register_value_file: {
        type: DataTypes.JSONB,
    },
    sub_register_value_comments: {
        type: DataTypes.TEXT,
    },
    valuator_report_file: {
        type: DataTypes.JSONB,
    },
    valuator_report_comments: {
        type: DataTypes.TEXT,
    },
    land_owner_value_file: {
        type: DataTypes.JSONB,
    },
    land_owner_value_comments: {
        type: DataTypes.TEXT,
    },
    road_approach_type: {
        type: DataTypes.STRING,
    },
    road_width: {
        type: DataTypes.FLOAT,
    },
    road_approach_comments: {
        type: DataTypes.TEXT,
    },
    water_facility: {
        type: DataTypes.BOOLEAN,
    },
    primary_source_of_land: {
        type: DataTypes.STRING,
    },
    water_facility_comments: {
        type: DataTypes.TEXT,
    },
    recent_transaction_in_surrounding: {
        type: DataTypes.STRING,
    },
    valuation_per_acre: {
        type: DataTypes.FLOAT,
    },
    local_market_acre_price: {
        type: DataTypes.FLOAT,
    },
    recent_transaction_comments: {
        type: DataTypes.TEXT,
    },
    electricity_facility: {
        type: DataTypes.BOOLEAN,
    },
    electricity_comments: {
        type: DataTypes.TEXT,
    },
    existing_trees: {
        type: DataTypes.BOOLEAN,
    },
    tree_count: {
        type: DataTypes.INTEGER,
    },
    trees_comments: {
        type: DataTypes.TEXT,
    },
    surrounding_mines: {
        type: DataTypes.BOOLEAN,
    },
    mines_comments: {
        type: DataTypes.TEXT,
    },
    disadvantages_comments: {
        type: DataTypes.TEXT,
    },
    future_plans_comments: {
        type: DataTypes.TEXT,
    },
    upcoming_infrastructures: {
        type: DataTypes.BOOLEAN,
    },
    infrastructures_list: {
        type: DataTypes.TEXT,
    },
    infrastructures_comments: {
        type: DataTypes.TEXT,
    },
    railway_connectivity: {
        type: DataTypes.BOOLEAN,
    },
    railway_distance: {
        type: DataTypes.FLOAT,
    },
    railway_comments: {
        type: DataTypes.TEXT,
    },
    airport_connectivity: {
        type: DataTypes.BOOLEAN,
    },
    airport_distance: {
        type: DataTypes.FLOAT,
    },
    airport_comments: {
        type: DataTypes.TEXT,
    },
}, {
    tableName: 'valuations'
});

module.exports = Valuation;
