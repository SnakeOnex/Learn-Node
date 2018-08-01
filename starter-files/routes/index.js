const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');

// Do work here
router.get('/', storeController.homePage);

router.get('/add', storeController.addStore)


router.get('/hello', (req, res) => {
  res.render('hello', {
    title: "Hello",
    dog: "Parek"
  });
});

module.exports = router;
