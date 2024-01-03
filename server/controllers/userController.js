const pool = require('../models/databaseModel')

const userController = {};


// INSERT INTO users (google_id, email, first_name, last_name, phone_number, is_owner)
userController.addUser = async (req, res, next) => {
    console.log('addUser request body', req.body);
    const { firstname, lastname, username, password, phoneNumber, googleId, email, watcher } = req.body;
    try {
        const result = await pool.query(
          'INSERT INTO users (google_id, email, first_name, last_name, phone_number, is_owner) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
          [googleId, email, firstname, lastname, phoneNumber, watcher]
        );
        console.log("result at userController.addUsers: ", result.rows[0])
        // Send the inserted dog data back to the client if needed
        res.locals.currentUsers = result.rows[0];
        next();
      } catch (error) {
          return next({
            log: `Error happened at middleware userController.addUsers ${error}`,
            message: { error: 'User database profile creation error' }}
          );
      }
    return next();
}

userController.getAllUsers = (req, res, next) => {
    pool
      .query('SELECT * FROM users')
      .then((data) => data.rows)
      .then((data) => (res.locals.allUsers = data))
      .then(() => next())
      .catch((err) => {
        console.log(err);
        next(err);
      });
  };


userController.verifyUser = async (req, res, next) => {
    console.log("starting verifyUser");
    console.log(req.params)
    const { googleId } = req.params; 
    console.log('Received Google ID:', googleId);
    try {
        // find the user based on the Google ID
        const user = await pool.query('SELECT * FROM users WHERE google_id = $1', [googleId]);
        console.log('Query Result:', user.rows);

        if (user.rows.length > 0) {
            req.locals.user = user.rows[0]
            next();
        } else {
            // User not found, send an error response
            res.status(401).json({ error: 'User not authorized' });
        }
    } catch (error) {
        console.error('Error verifying user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = userController;

