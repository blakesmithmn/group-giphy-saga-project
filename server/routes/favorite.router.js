const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  res.sendStatus(200);
});

// add a new favorite
router.post('/', (req, res) => {
  console.log('req.body:',req.body.url);
  const gifUrl = req.body.url;
  const sqlQuery =`
    INSERT INTO favorites (url)
      VALUES ($1);
    `
  const sqlValues = [gifUrl]

  pool.query(sqlQuery, sqlValues)
      .then(response => {
        res.sendStatus(200);
      })
      .catch(error => {
        res.sendStatus(500);
        console.log('Error in POST /api/favorite', error);
      })
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
