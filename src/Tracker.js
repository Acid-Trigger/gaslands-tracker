import React, { useState } from 'react';

function Tracker({ autoShiftHazard }) {
  const [gear, setGear] = useState(1);
  const [hazards, setHazards] = useState(0);
  const [hull, setHull] = useState(10);
  const [carTitle, setCarTitle] = useState('Unnamed Car');
  const [buildSlots, setBuildSlots] = useState([]);
  const [perks, setPerks] = useState([]);
  const [crew, setCrew] = useState(0);
  const [cans, setCans] = useState(0);

  const increaseGear = () => {
    setGear(gear + 1);
    if (autoShiftHazard) {
      setHazards(hazards + 1);
    }
  };

  const decreaseGear = () => {
    setGear(gear > 1 ? gear - 1 : 1);
    if (autoShiftHazard) {
      setHazards(hazards + 1);
    }
  };

  const addHazard = () => setHazards(hazards + 1);
  const removeHazard = () => setHazards(hazards > 0 ? hazards - 1 : 0);

  const takeDamage = () => setHull(hull > 0 ? hull - 1 : 0);
  const repairHull = () => setHull(hull + 1);

  const handleBuildSlotChange = (index, value) => {
    const newBuildSlots = [...buildSlots];
    newBuildSlots[index].name = value;
    setBuildSlots(newBuildSlots);
  };

  const addBuildSlot = () => setBuildSlots([...buildSlots, { name: '', ammo: 0 }]);
  const removeBuildSlot = () => setBuildSlots(buildSlots.slice(0, -1));

  const handlePerkChange = (index, value) => {
    const newPerks = [...perks];
    newPerks[index] = value;
    setPerks(newPerks);
  };

  const addPerk = () => setPerks([...perks, '']);
  const removePerk = () => setPerks(perks.slice(0, -1));

  const increaseAmmo = (index) => {
    const newBuildSlots = [...buildSlots];
    newBuildSlots[index].ammo += 1;
    setBuildSlots(newBuildSlots);
  };

  const decreaseAmmo = (index) => {
    const newBuildSlots = [...buildSlots];
    newBuildSlots[index].ammo = Math.max(0, newBuildSlots[index].ammo - 1);
    setBuildSlots(newBuildSlots);
  };

  return (
    <div className="tracker-container">
      <input
        type="text"
        className="car-title-input"
        value={carTitle}
        onChange={(e) => setCarTitle(e.target.value)}
        placeholder="Enter Car Title"
      />
      <div className="tracker-top">
        <div className="tracker-section">
          <h2>Gear: {gear}</h2>
          <button onClick={increaseGear}>Increase Gear</button>
          <button onClick={decreaseGear}>Decrease Gear</button>
        </div>
        <div className="tracker-section">
          <h2 style={{ color: hazards >= 6 ? 'red' : 'inherit' }}>
            {hazards >= 6 ? 'WIPEOUT' : `Hazards: ${hazards}`}
          </h2>
          <button onClick={addHazard}>Add Hazard</button>
          <button onClick={removeHazard}>Remove Hazard</button>
        </div>
        <div className="tracker-section">
          <h2>Hull: {hull}</h2>
          <button onClick={takeDamage}>Take Damage</button>
          <button onClick={repairHull}>Repair Hull</button>
        </div>
      </div>
      <div className="tracker-bottom">
        <div className="tracker-left">
          <div className="tracker-section">
            <div className="header-with-buttons">
              <h2>Build Slots</h2>
              <button onClick={addBuildSlot}>+</button>
              <button onClick={removeBuildSlot} disabled={buildSlots.length === 0}>-</button>
            </div>
            {buildSlots.map((slot, index) => (
              <div key={index} className="build-slot">
                <input
                  type="text"
                  value={slot.name}
                  onChange={(e) => handleBuildSlotChange(index, e.target.value)}
                  placeholder={`Slot ${index + 1}`}
                />
                <div className="ammo-controls">
                  <span>Ammo: <strong>{slot.ammo}</strong></span>
                  <button onClick={() => increaseAmmo(index)}>+</button>
                  <button onClick={() => decreaseAmmo(index)}>-</button>
                </div>
              </div>
            ))}
          </div>
          <div className="tracker-section">
            <div className="header-with-buttons">
              <h2>Perks Slots</h2>
              <button onClick={addPerk}>+</button>
              <button onClick={removePerk} disabled={perks.length === 0}>-</button>
            </div>
            {perks.map((perk, index) => (
              <input
                key={index}
                type="text"
                value={perk}
                onChange={(e) => handlePerkChange(index, e.target.value)}
                placeholder={`Perk ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="tracker-right">
          <div className="tracker-section">
            <h2>Crew: {crew}</h2>
            <button onClick={() => setCrew(crew + 1)}>Add Crew</button>
            <button onClick={() => setCrew(crew > 0 ? crew - 1 : 0)}>Remove Crew</button>
          </div>
          <div className="tracker-section">
            <h2>Cans: {cans}</h2>
            <button onClick={() => setCans(cans + 1)}>Add Can</button>
            <button onClick={() => setCans(cans > 0 ? cans - 1 : 0)}>Remove Can</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tracker;