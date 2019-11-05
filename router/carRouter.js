const express = require('express');
const db = require('../data/dbConfig');

const router = express.Router();
router.use(express.json());

// get all data ###############
router.get('/', (req, res) => {
   db('cars')
      .then(car => {
         res.status(200).json(car);
      })
      .catch(error => {
         res.status(500).json({ error: 'Could Not Retrieve All Data' });
      });
});

//get by id #########################
router.get('/:id', (req, res) => {
   const id = req.params.id;

   db('cars')
      .where('id', '=', id)
      .then(account => (account.length ? res.json(account) : reject()))
      .catch(error => {
         res.status(500).json({ error: 'Could Not Find Car With This ID' });
      });
});

//post ######################
router.post('/', (req, res) => {
   const data = req.body;

   db('cars')
      .insert(data, 'id')
      .then(car => {
         res.status(200).json({ message: 'Cars Added.' });
      })
      .catch(error => {
         res.status(500).json({ error: 'Could Not Upload The Data. ' });
      });
});

module.exports = router;
