import React, { useState } from 'react';

function Tracker() {
  const [gear, setGear] = useState(1);
  const [hazards, setHazards] = useState(0);
  const [hull, setHull] = useState(10);
  const [carTitle, setCarTitle] = useState('Unnamed Car');
  const [weapons, setWeapons] = useState(['', '', '']);
  const [perks, setPerks] = useState(['', '', '']);
  const [crew, setCrew] = useState(0);
  const [cans, setCans] = useState(0);

  const increaseGear = () => setGear(gear + 1);
  const decreaseGear = () => setGear(gear > 1 ? gear - 1 : 1);

  const addHazard = () => setHazards(hazards + 1);
  const removeHazard = () => setHazards(hazards > 0 ? hazards - 1 : 0);

  const takeDamage = () => setHull(hull > 0 ? hull - 1 : 0);
  const repairHull = () => setHull(hull + 1);

  const handleWeaponChange = (index, value) => {
    const newWeapons = [...weapons];
    newWeapons[index] = value;
    setWeapons(newWeapons);
  };

  const handlePerkChange = (index, value) => {
    const newPerks = [...perks];
    newPerks[index] = value;
    setPerks(newPerks);
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
            <h2>Weapons</h2>
            {weapons.map((weapon, index) => (
              <input
                key={index}
                type="text"
                value={weapon}
                onChange={(e) => handleWeaponChange(index, e.target.value)}
                placeholder={`Weapon ${index + 1}`}
              />
            ))}
          </div>
          <div className="tracker-section">
            <h2>Perks</h2>
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