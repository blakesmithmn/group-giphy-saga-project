const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
  // return all categories
  const queryText = `SELECT * FROM category ORDER BY name ASC`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
  const newCategoryName = req.body.newCategoryName;
  const queryText = `INSERT INTO "category"
                      ("name")
                      VALUES
                      ($1);`
  pool.query(queryText, [newCategoryName])
  .then(result => {
    res.sendStatus(201);
  })
  .catch(error => {
    console.log('Error in /api/category POST DB query', error);
    res.sendStatus(500);
  })
})

router.delete('/:id', (req, res) => {
  const deleteId = req.params.id;
  const queryText = `DELETE FROM "category"
                      WHERE "id" = $1;`
  pool.query(queryText, [deleteId])
  .then(result => {
    res.sendStatus(200);
  })
  .catch(error => {
    console.log('Error in /api/category DELETE DB query', error);
    res.sendStatus(500);
  })
})

router.put('/:id', (req, res) => {
  const updateId = req.params.id;
  const queryText = `UPDATE "favorites"
                      SET "category_id" = NULL
                      WHERE "category_id" = $1;`
  pool.query(queryText, [updateId])
  .then(result => {
    res.sendStatus(200);
  })
  .catch(error => {
    console.log('Error in /api/category PUT DB query', error);
    res.sendStatus(500);
  })
})

module.exports = router;
