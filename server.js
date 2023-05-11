const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/biodata', (req, res) => {
  const { name, 'tempat-lahir': tempatLahir, 'tanggal-lahir': tanggalLahir, alamat } = req.query;

  const biodata = {
    nama: name,
    'tempat-lahir': tempatLahir,
    'tanggal-lahir': tanggalLahir,
    alamat: alamat
  };

  res.json(biodata);
});

app.post('/biodata', (req, res) => {
  const { name, 'tempat-lahir': tempatLahir, 'tanggal-lahir': tanggalLahir, alamat } = req.body;

  const biodata = {
    nama: name,
    'tempat-lahir': tempatLahir,
    'tanggal-lahir': tanggalLahir,
    alamat: alamat
  };

  res.json(biodata);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
