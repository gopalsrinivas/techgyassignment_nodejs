const FamilyTree = require('../models/FamilyTree');

const createFamilyTree = async (req, res) => {
    try {
        const { father_name, father_age, mother_name, mother_age, owner_name, owner_age, religion, num_wifes, num_kids, num_siblings } = req.body;

        // Create a new record in the FamilyTree table
        const familyTree = await FamilyTree.create({
            father_name,
            father_age,
            mother_name,
            mother_age,
            owner_name,
            owner_age,
            religion,
            num_wifes,
            num_kids,
            num_siblings,
        });

        res.status(201).json({
            status_code: 201,
            message: 'Family Tree created successfully',
            data: familyTree,
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            message: 'Error creating Family Tree record',
            error: error.message,
        });
    }
};

module.exports = {
    createFamilyTree,
};
