const SimCard = require('../models/usermodel');

// Add a new SIM card
const addSimCard = async (req, res) => {
  try {
    const { simNumber, phoneNumber } = req.body;
    const simCard = await SimCard.create({ simNumber, phoneNumber, status: 'inactive' }); 
    res.status(201).json({ message: 'SIM card added successfully', simCard });
  } catch (err) {
    res.status(400).json({ error: 'Error adding SIM card' });
  }
};

// Activate a SIM card
const activateSimCard = async (req, res) => {
  try {
    const { simNumber } = req.body;
    const simCard = await SimCard.findOne({ simNumber }); 

    if (!simCard) {
      return res.status(404).json({ error: 'SIM card not found' });
    }

    simCard.status = 'active';
    simCard.activationDate = new Date();
    await simCard.save();

    res.json({ message: 'SIM card activated successfully', simCard });
  } catch (err) {
    res.status(500).json({ error: 'Error activating SIM card' });
  }
};

// Check SIM card activation status
const checkSimActivation = async (req, res) => {
  try {
    const { simNumber } = req.body;
    const simCard = await SimCard.findOne({ simNumber });

    if (!simCard) {
      return res.status(404).json({ error: 'SIM card not found' });
    }

    res.json({ simNumber: simCard.simNumber, status: simCard.status, activationDate: simCard.activationDate });
  } catch (err) {
    res.status(500).json({ error: 'Error checking SIM card activation' });
  }
};

// Delete a SIM card
const deleteSimCard = async (req, res) => {
  try {
    const { simNumber } = req.body;
    const result = await SimCard.deleteOne({ simNumber });

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'SIM card not found' });
    }

    res.json({ message: 'SIM card deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting SIM card' });
  }
};

module.exports = {
  addSimCard,
  activateSimCard,
  checkSimActivation,
  deleteSimCard,
};
