// routes/api/reptiles.js

const express = require('express');
const router = express.Router();

// Load Reptile model
const Reptile = require('../../models/Reptile');

// @route GET api/reptiles/test
// @description tests reptiles route
// @access Public
router.get('/test', (req, res) => res.send('reptile route testing!'));

// @route GET api/reptiles
// @description Get all reptiles
// @access Public
router.get('/', (req, res) => {
  Reptile.find()
    .then(reptiles => res.json(reptiles))
    .catch(err => res.status(404).json({ noreptilesfound: 'No Reptile found'}));
});

// @route GET api/reptiles
// @description add/save reptile
// @access Public
router.post('/', (req, res) => {
  Reptile.create(req.body)
    .then(book => res.json({ msg: 'Reptile added successfully'}))
    .catch(err => res.status(400).json({ error: 'Unable to add this reptile'}));
});

// @route GET api/reptiles/:id
// @description Update reptile
// @access Public
router.put('/:id', (req, res) => {
  Reptile.findByIdAndUpdate(req.params.id, req.body)
    .then(book => res.json({ msg: 'Updated succesffully'}))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database'}));
});

// @route GET api/reptiles/:id
// @description Delete reptile by id
// @access Public
router.delete('/:id', (req, res) => {
  Reptile.findByIdAndRemove(req.params.id, req.body)
    .then(book => res.json({ msg: 'Reptile entry deleted succesffully'}))
    .catch(err => res.status(404).json({ error: 'Unable to delete reptile '}))
});

module.exports = router;
