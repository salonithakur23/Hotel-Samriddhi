  const bcrypt = require('bcrypt');
  const jwt = require('jsonwebtoken');
  const User = require('../models/user');

  // Signup controller
  exports.signup = async (req, res) => {
    const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });

      if (existingUser) {
        return res.status(409).json({ error: 'Username already exists' });
      }

      // Create a new user
      const newUser = new User({ username });

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
      newUser.password = hashedPassword;

      // Save the user to the database
      const savedUser = await newUser.save();

      // Generate JWT token
      const token = jwt.sign(
        { userId: savedUser._id, username: savedUser.username },
        'your-secret-key',
      );

      res.status(201).json({ token });
    } catch (err) {
      res.status(500).json({ error: 'Failed to create user' });
    }
  };

  // Login controller
  // Login controller
// Login controller
exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ error: 'Authentication failed' });
    }


    const result = await bcrypt.compare(password, user.password);

    if (!result) {
      return res.status(401).json({ error: 'Authentication failed' });
    }

    // Generate JWT token without expiration
    const token = jwt.sign(
      { userId: user._id, username: user.username },
      'your-secret-key'
    );

    // Store the token in local storage
    localStorage.setItem('token', token);

    res.status(200).json({ message: 'Login successful', token });
  } catch (err) {
    res.status(500).json({ error: 'Failed to authenticate' });
  }
};
