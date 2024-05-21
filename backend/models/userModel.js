const db = require('../config/db');

exports.getUsers = (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
};

exports.getUserById = (req, res) => {
  const { id } = req.params;
  console.log(`Fetching user with ID: ${id}`);
  db.query('SELECT * FROM users WHERE id = ?', [id], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).send(err);
    }
    if (result.length === 0) {
      console.log('User not found');
      return res.status(404).send('User not found');
    }
    console.log('User found:', result[0]);
    res.json(result[0]);
  });
};


exports.createUser = (req, res) => {
  const { name, email } = req.body;
  db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(201).send('User created');
  });
};

exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  db.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, id], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('User updated');
  });
};

exports.deleteUser = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM users WHERE id = ?', [id], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('User deleted');
  });
};
