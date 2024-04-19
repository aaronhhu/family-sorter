import React, { useState } from 'react';
import './App.css';
import pokeball from './pokeball.webp';
import ScreenOne from './ScreenOne'; // Importing ScreenOne component
import ScreenTwo from './ScreenTwo'; // Importing ScreenTwo component
import ScreenThree from './ScreenThree'; // Importing ScreenThree component

function App() {
  // State to hold the input name
  const [name, setName] = useState('');

  // State to hold the selected screen component
  const [selectedScreen, setSelectedScreen] = useState(null);

  // Function to handle input change
  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Logic to determine the screen based on the entered name
    let screenComponent;
    switch (name.toLowerCase()) {
      case 'name1':
        screenComponent = <ScreenOne />;
        break;
      case 'name2':
        screenComponent = <ScreenTwo />;
        break;
      case 'name3':
        screenComponent = <ScreenThree />;
        break;
      default:
        // If name doesn't match any, display a default screen or nothing
        screenComponent = null;
        break;
    }

    // Update the selected screen component
    setSelectedScreen(screenComponent);
  };

  return (
    <div className="App">
      <img className="image" src={pokeball} height="500px" alt="pokeball" />
      <h1 className="what_fam">What fam are you in?</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Your Name..."
          value={name}
          onChange={handleInputChange}
        />
        <button className="button" type="submit">Let's Go!</button>
      </form>
      {/* Render the selected screen component */}
      {selectedScreen}
    </div>
  );
}

export default App;
