const FamilyTree = require('../models/FamilyTree');

const createFamilyTree = async (req, res) => {
    try {
        const { father_name, father_age, mother_name, mother_age, owner_name, owner_age, religion, num_wifes, num_kids, num_siblings } = req.body;
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

const getAllFamilyTreeRecords = async (req, res) => {
    try {
        const familyTrees = await FamilyTree.findAll();
        res.status(200).json({
            status_code: 200,
            message: 'Family tree records fetched successfully',
            data: familyTrees,
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            message: 'Error fetching Family tree records',
            error: error.message,
        });
    }
};

const updateFamilyTree = async (req, res) => {
    try {
        const { id } = req.params;
        const { father_name, father_age, mother_name, mother_age, owner_name, owner_age, religion, num_wifes, num_kids, num_siblings } = req.body;

        const familyTree = await FamilyTree.findByPk(id);
        if (!familyTree) {
            return res.status(404).json({
                message: 'Family Tree record not found',
            });
        }

        familyTree.father_name = father_name || familyTree.father_name;
        familyTree.father_age = father_age || familyTree.father_age;
        familyTree.mother_name = mother_name || familyTree.mother_name;
        familyTree.mother_age = mother_age || familyTree.mother_age;
        familyTree.owner_name = owner_name || familyTree.owner_name;
        familyTree.owner_age = owner_age || familyTree.owner_age;
        familyTree.religion = religion || familyTree.religion;
        familyTree.num_wifes = num_wifes || familyTree.num_wifes;
        familyTree.num_kids = num_kids || familyTree.num_kids;
        familyTree.num_siblings = num_siblings || familyTree.num_siblings;

        await familyTree.save();

        res.status(200).json({
            status_code: 200,
            message: 'Family Tree updated successfully',
            data: familyTree,
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            message: 'Error updating Family Tree record',
            error: error.message,
        });
    }
};

module.exports = {
    createFamilyTree,
    getAllFamilyTreeRecords,
    updateFamilyTree,
};
