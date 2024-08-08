const db = require('../db/dbConnection');

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const [rows] = await db.execute('SELECT * FROM user WHERE email = ?', [email]);
        if (rows.length === 0) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        const user = rows[0];
        const { password: userPassword, ...userDetails } = user;
        res.json({ userDetails });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error', error });
    }
};

module.exports = { loginUser }