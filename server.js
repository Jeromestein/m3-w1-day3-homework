const express = require('express');
const path = require('path');
const app = express();

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/foodblog', (req, res) => {
  res.render('content');
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/foodblog');
});
