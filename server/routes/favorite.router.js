const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const sqlQuery = `
     SELECT favorites.*, category.name FROM "favorites"
    LEFT JOIN "category"
      ON favorites.category_id = category.id;
    `

  pool.query(sqlQuery)
    .then((result) => {
      // sending an array of objects to REDUX
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('Error in Router GET FAVS:', error);
    })
});

// add a new favorite
router.post('/', (req, res) => {
  res.sendStatus(200);
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  const updateId = req.params.favId;
  const newCategoryId = req.body
  const queryText = `UPDATE "favorites
                        SET "category_id" = $1
                        WHERE "id" = $2;`
  pool.query(queryText, [newCategoryId, updateId])
    .then((response) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('Error in /favorite PUT request', error);
      res.sendStatus(500);
    })

});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
