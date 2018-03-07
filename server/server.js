const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/images', (req, res) => {
  db.findAll((err, results) => {
    if (err) {
      console.log('story err', err);
    } else {
      // console.log('story success', results)
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`)
});