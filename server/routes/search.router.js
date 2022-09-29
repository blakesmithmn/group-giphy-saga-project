const express = require('express');
const router = express.Router();
const axios = require('axios');

const api_key = process.env.API_KEY;
console.log(api_key);

// Get GIFS based on search Q
router.get('/:query', (req, res) => {
  // console.log('received search get request')
    // Get the q parameter
    let q = req.params.query;
    console.log(q);

    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${q}&limit=5`)
    .then((gifRes => {
      // console.log(gifRes.data.data.images.original.url)
      res.send(gifRes.data.data)
    }))
    .catch((error => {
      console.log('/search GET Error', error);
    }));
})



module.exports = router;