import React, { useState } from 'react';
import './App.css';
import Tracker from './Tracker'; // Assuming Tracker is in the same directory

function App() {
  const [trackers, setTrackers] = useState([0]);
  const [autoShiftHazard, setAutoShiftHazard] = useState(false);

  const addTracker = () => {
    setTrackers([...trackers, trackers.length]);
  };

  const removeTracker = () => {
    if (trackers.length > 1) {
      setTrackers(trackers.slice(0, -1));
    }
  };

  return (
    <div className="App">
      <div className="auto-shift-hazard">
        <label>
          <input
            type="checkbox"
            checked={autoShiftHazard}
            onChange={(e) => setAutoShiftHazard(e.target.checked)}
          />
          Auto Shift Hazard
        </label>
      </div>
      {trackers.map((key) => (
        <Tracker key={key} autoShiftHazard={autoShiftHazard} />
      ))}
      <div className="tracker-buttons">
        <button className="add-tracker-button" onClick={addTracker}>
          +
        </button>
        <button className="remove-tracker-button" onClick={removeTracker}>
          -
        </button>
      </div>
    </div>
  );
}

export default App;
