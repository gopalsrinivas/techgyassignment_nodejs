const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 5000;
const sequelize = require('./config/database');
const legalityRoutes = require('./routes/legalityRoutes');
const familyTreeRoutes = require('./routes/familyTreeRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/legality', legalityRoutes);
app.use('/api/family-tree', familyTreeRoutes);

sequelize.sync({ force: false })
    .then(() => {
        console.log('Database synced!');
    })
    .catch(err => {
        console.error('Database sync failed:', err);
    });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
