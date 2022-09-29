const express = require('express');
const router = express.Router();
const axios = require('axios');

const api_key = process.env.API_KEY;

// Get GIFS based on search Q
router.get('/', (req, res) => {
    // Get the q parameter
    console.log(req.query.q);
    let q = req.query.q;
        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${q}`)
        .then((gifRes => {
          res.send(gifRes.data.data)
        }))
        .catch((error => {
          console.log('/search GET Error', error);
        }));
})



module.exports = router;