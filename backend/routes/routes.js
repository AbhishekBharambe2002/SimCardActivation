const express = require('express');
const { addSimCard, activateSimCard, checkSimActivation, deleteSimCard } = require('../controller/SimCardController');

const router = express.Router();

// Route to add a new SIM card
router.post('/add-sim', addSimCard);

// Route to activate a SIM card
router.post('/activate-sim', activateSimCard);

// Route to check SIM card activation status
router.post('/check-sim-activation', checkSimActivation);

// Route to delete a SIM card
router.delete('/delete-sim', deleteSimCard); // Use DELETE method for deleting

module.exports = router;
