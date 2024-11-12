const express = require('express');
const path = require('path');
const app = express();
const port = 5000;
const sequelize = require('./config/database');

// Import routes
const legalityRoutes = require('./routes/legalityRoutes');
const familyTreeRoutes = require('./routes/familyTreeRoutes');
const landBoundariesRoutes = require('./routes/landBoundariesRoutes');
const valuationRoutes = require('./routes/valuationRoutes');
const agricultureCertificationRoutes = require('./routes/agricultureCertificationRoutes');


// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static file serving
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Use routes
app.use('/api/legality', legalityRoutes);
app.use('/api/family-tree', familyTreeRoutes);
app.use('/api/land-boundaries', landBoundariesRoutes);
app.use('/api/valuation', valuationRoutes);
app.use('/api/agriculture-certification', agricultureCertificationRoutes);

// Sync database
sequelize.sync({ force: false })
    .then(() => {
        console.log('Database synced!');
    })
    .catch(err => {
        console.error('Database sync failed:', err);
    });

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
