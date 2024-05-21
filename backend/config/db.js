const mysql = require('mysql2')

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mahasiswa'
});

db.connect((err) => {
  if (err) {
    console.error('Kesalahan koneksi ke database:', err);
    return;
  }
  console.log('Terhubung ke database')
});

module.exports = db;