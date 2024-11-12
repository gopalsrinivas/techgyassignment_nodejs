const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const FamilyTree = sequelize.define('FamilyTree', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    father_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    father_age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    mother_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mother_age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    owner_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    owner_age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    religion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    num_wifes: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    num_kids: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    num_siblings: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'family_tree'
});

module.exports = FamilyTree;
