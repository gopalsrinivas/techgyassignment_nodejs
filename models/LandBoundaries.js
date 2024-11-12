const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const LandBoundaries = sequelize.define('LandBoundaries', {
    land_images_file: { type: DataTypes.JSONB },
    land_images_comments: { type: DataTypes.TEXT },
    landscape_view_of_farmland_file: { type: DataTypes.JSONB },
    slope_side: { type: DataTypes.STRING },
    slope_side_comments: { type: DataTypes.TEXT },
    shape_of_land: { type: DataTypes.STRING },
    shape_of_land_comment: { type: DataTypes.TEXT },
    water_and_electricity_facility: { type: DataTypes.STRING },
    water_facility: { type: DataTypes.STRING },
    electricity_facility: { type: DataTypes.STRING },
    water_and_electricity_facility_comments: { type: DataTypes.TEXT },
    masterplan_file: { type: DataTypes.JSONB },
    masterplan_comments: { type: DataTypes.TEXT },
    east_boundaries_select: { type: DataTypes.STRING },
    east_owner_name: { type: DataTypes.STRING },
    east_age: { type: DataTypes.INTEGER },
    east_boundaries_comments: { type: DataTypes.TEXT },
    west_boundaries_select: { type: DataTypes.STRING },
    type_of_road: { type: DataTypes.STRING },
    width_of_road: { type: DataTypes.STRING },
    west_boundaries_comments: { type: DataTypes.TEXT },
    north_boundaries_select: { type: DataTypes.STRING },
    tree_count: { type: DataTypes.INTEGER },
    north_boundaries_comments: { type: DataTypes.TEXT },
    south_boundaries_select: { type: DataTypes.STRING },
    south_boundaries_comments: { type: DataTypes.TEXT },
    survey_report: { type: DataTypes.STRING },
    private_survey_file: { type: DataTypes.JSONB },
    private_survey_number: { type: DataTypes.STRING },
    government_survey_file: { type: DataTypes.JSONB },
    government_survey_number: { type: DataTypes.STRING },
    survey_report_comments: { type: DataTypes.TEXT }
}, {
    tableName: 'land_boundaries'
});

module.exports = LandBoundaries;
