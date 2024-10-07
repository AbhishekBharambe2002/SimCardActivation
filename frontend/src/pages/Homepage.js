import React, { useState } from 'react';
import '../Homepage.css';

const Homepage = () => {
  const [simNumber, setSimNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [activateSimNumber, setActivateSimNumber] = useState('');
  const [checkSimNumber, setCheckSimNumber] = useState('');
  const [deleteSimNumber, setDeleteSimNumber] = useState('');
  const [activationStatus, setActivationStatus] = useState(null);
  const [error, setError] = useState(null);

  // Use the environment variable for the base URL
  const APP_URL = process.env.REACT_APP_UPI_URL;

  // Handle adding a new SIM card
  const handleAddSimCard = async (e) => {
    e.preventDefault();
    console.log(`Adding SIM Number: ${simNumber}, Phone Number: ${phoneNumber}`);

    try {
      const response = await fetch(`${APP_URL}/api/add-sim`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ simNumber, phoneNumber }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Success:', data);
        setSimNumber('');
        setPhoneNumber('');
      } else {
        console.error('Error:', data);
        setError(data.error);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Error connecting to the server');
    }
  };

  // Handle activating a SIM card
  const handleActivateSimCard = async (e) => {
    e.preventDefault();
    console.log(`Activating SIM Number: ${activateSimNumber}`);

    try {
      const response = await fetch(`${APP_URL}/api/activate-sim`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ simNumber: activateSimNumber }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Activation Success:', data);
        setError(null);
      } else {
        console.error('Error:', data);
        setError(data.error);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Error connecting to the server');
    }
  };

  // Handle checking SIM card activation status
  const handleCheckActivation = async (e) => {
    e.preventDefault();
    console.log(`Checking activation for SIM Number: ${checkSimNumber}`);

    try {
      const response = await fetch(`${APP_URL}/api/check-sim-activation`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ simNumber: checkSimNumber }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Activation Status:', data);
        setActivationStatus(data);
        setError(null);
      } else {
        console.error('Error:', data);
        setError(data.error);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Error connecting to the server');
    }
  };

  // Handle deleting a SIM card
  const handleDeleteSimCard = async (e) => {
    e.preventDefault();
    console.log(`Deleting SIM Number: ${deleteSimNumber}`);

    try {
      const response = await fetch(`${APP_URL}/api/delete-sim`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ simNumber: deleteSimNumber }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Deletion Success:', data);
        setError(null);
      } else {
        console.error('Error:', data);
        setError(data.error);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Error connecting to the server');
    }
  };

  return (
    <div className="homepage-container">
      <h1>SIM Card Activation</h1>

      {/* Add SIM Card Form */}
      <div className="card">
        <h2>Add SIM Card</h2>
        <form onSubmit={handleAddSimCard}>
          <label htmlFor="simNumber">SIM Number:</label>
          <input
            type="text"
            id="simNumber"
            value={simNumber}
            onChange={(e) => setSimNumber(e.target.value)}
            required
          />

          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />

          <button type="submit" className="submit-btn">Add SIM</button>
        </form>
      </div>

      {/* Activate SIM Card Form */}
      <div className="card">
        <h2>Activate SIM Card</h2>
        <form onSubmit={handleActivateSimCard}>
          <label htmlFor="activateSimNumber">SIM Number to Activate:</label>
          <input
            type="text"
            id="activateSimNumber"
            value={activateSimNumber}
            onChange={(e) => setActivateSimNumber(e.target.value)}
            required
          />
          <button type="submit" className="submit-btn">Activate SIM</button>
        </form>
      </div>

      {/* Check SIM Card Activation Form */}
      <div className="card">
        <h2>Check Activation Status</h2>
        <form onSubmit={handleCheckActivation}>
          <label htmlFor="checkSimNumber">Check Activation for SIM Number:</label>
          <input
            type="text"
            id="checkSimNumber"
            value={checkSimNumber}
            onChange={(e) => setCheckSimNumber(e.target.value)}
            required
          />
          <button type="submit" className="submit-btn">Check Activation</button>
        </form>
      </div>

      {/* Display Activation Status */}
      {activationStatus && (
        <div className="activation-status">
          <p>SIM Number: {activationStatus.simNumber}</p>
          <p>Status: {activationStatus.status}</p>
          {activationStatus.activationDate && (
            <p>Activation Date: {new Date(activationStatus.activationDate).toLocaleString()}</p>
          )}
        </div>
      )}

      {/* Delete SIM Card Form */}
      <div className="card">
        <h2>Delete SIM Card</h2>
        <form onSubmit={handleDeleteSimCard}>
          <label htmlFor="deleteSimNumber">SIM Number to Delete:</label>
          <input
            type="text"
            id="deleteSimNumber"
            value={deleteSimNumber}
            onChange={(e) => setDeleteSimNumber(e.target.value)}
            required
          />
          <button type="submit" className="submit-btn">Delete SIM</button>
        </form>
      </div>

      {/* Error Display */}
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default Homepage;
