const db = require('../db/dbConnection');

const addLocation = async (req, res) => {
    const { country, state, district, city } = req.body;
console.log(req.body);

    // Check for missing fields
    if (!country || !state || !district || !city) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    const query = 'INSERT INTO location (country, state, district, city) VALUES (?, ?, ?, ?)';
    try {
        const [result] = await db.query(query, [country, state, district, city]);
        res.status(201).json({ message: 'Location added successfully', locationId: result.insertId });
    } catch (err) {
        console.error('Error inserting data:', err.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};



const getLocations = async (req, res) => {
    try {
        const query = 'SELECT * FROM location';
        const results = await db.query(query);
        res.status(200).json({ locations: results });
    } catch (error) {
        console.error('Error retrieving data:', error);
        res.status(500).json({ error: 'Database error' });
    }
};



module.exports = { addLocation, getLocations }