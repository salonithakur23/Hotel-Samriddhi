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

    const newUser = new User({ username });


    const hashedPassword = await bcrypt.hash(password, 10);
    newUser.password = hashedPassword;

    const savedUser = await newUser.save();


    const token = jwt.sign(
      { userId: savedUser._id, username: savedUser.username },
      'your-secret-key',
      { expiresIn: '1h' }
    );

    res.status(201).json({ token });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create user' });
  }
};


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

    const token = jwt.sign(
      { userId: user._id, username: user.username },
      'your-secret-key',
      { expiresIn: '1h' }
    );
    res.status(200).json({ message: 'Login successful', token });
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ error: 'Failed to authenticate' });
  }
};
