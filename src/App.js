import React, { useState } from 'react';
import './App.css';
import thinking from './thinking.webp';

import charizard from './charizard.gif'
import blastoise from './blastoise.gif'
import venusaur from './venusaur.gif'
import blossom from './blossom.gif'
import bubbles from './bubbles.gif'
import buttercup from './buttercup.gif'
import redR from './redranger.gif'
import greenR from './rangergreen.gif'
import blueR from './blueranger.gif'
import redT from './redtubby.gif'
import blueT from './bluetubby.gif'
import greenT from './greentubby.gif'


function App() {
  // State to hold the input name
  const [name, setName] = useState('');

  // State to hold the image source
  const [imageSrc, setImageSrc] = useState(thinking); // Set default image path

  // State to hold the heading text
  const [headingText, setHeadingText] = useState('\uD83D\uDC40 What family are you in? \uD83D\uDC40'); // Set default heading text

  const [bgcolor, setBgColor] = useState("");

  // State to track whether the form should be displayed or not
  const [showForm, setShowForm] = useState(true);
  
  // Function to handle input change
  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    const imagePathsTight = [charizard, blossom, redR, redT]; // Add your image paths here
    const imagePathsLoose = [blastoise, bubbles, blueR, blueT];
    const imagePathsClose = [venusaur, buttercup, greenR, greenT];

    // Randomly select an image path from the array
    const randomIndex = Math.floor(Math.random() * imagePathsTight.length);
    const randomImagePathTight = imagePathsTight[randomIndex];
    const randomImagePathLoose = imagePathsLoose[randomIndex];
    const randomImagePathClose = imagePathsClose[randomIndex];

    const nameMappings = {
    'christopher trang': 'name2',
    'max xu': 'name2',
    'siddhanth iyer': 'name2',
    'maya ham': 'name2',
    'kiana sueyoshi': 'name2',
    'kelly luo': 'name2',
    'kathryn galdamez': 'name2',
    'katherine sha': 'name2',
    'jonathan lew': 'name2',
    'joannie chang': 'name2',
    'jason huang': 'name2',
    'evelyn fuentes': 'name2',
    'emma luong': 'name2',
    'emily espinosa': 'name2',
    'dylan slen': 'name2',
    'andrew dang': 'name2',
    'grace lim': 'name2',

    'tammy wong': 'name1',
    'terrie kim': 'name1',
    'tina lei': 'name1',
    'saaniya patwardhan': 'name1',
    'nicole chen': 'name1',
    'karissa suzuki': 'name1',
    'jenny wu': 'name1',
    'jayson astor': 'name1',
    'ethan lee': 'name1',
    'arpana tamang': 'name1',

    'alyssa lee': 'name3',
    'amy wang': 'name3',
    'ana mariela gamboa': 'name3',
    'jessica ting': 'name3',
    'wavan liu': 'name3',
    'sean elmore': 'name3',

    'amy gonzalez': 'name2'
    };
  
    // Sample list of names
    const names = [];
  
    // Function to get the mapping for each name
    const getNameMapping = (name) => nameMappings[name] || 'default';
  
    // Map each name to its corresponding identifier
    const mappedNames = names.map((name) => ({
      name: name,
      identifier: getNameMapping(name)
    }));
  
  console.log(mappedNames);

  const nameIdentifier = getNameMapping(name.toLowerCase());

    // Logic to determine the screen based on the entered name
    let imageSrc, headingText;

    switch (nameIdentifier) {
      case 'name1':
        imageSrc = randomImagePathTight; // Update with your image path for fam 1
        headingText = '\uD83D\uDD25 RAHH YOU\'RE IN TIGHT FAM! \uD83D\uDD25';
        setBgColor('rgb(191, 33, 47)');
        break;
      case 'name2':
        imageSrc = randomImagePathLoose; // Update with your image path for fam 2
        headingText = '\uD83E\uDD19 WOOO YOU\'RE IN LOOSE FAM! \uD83E\uDD19';
        setBgColor('rgb(38, 75, 150)');
        break;
      case 'name3':
        imageSrc = randomImagePathClose; // Update with your image path for fam 3
        headingText = '\uD83D\uDC9A YAYY YOU\'RE IN CLOSE FAM! \uD83D\uDC9A';
        setBgColor('rgb(0, 111, 60)');
        break;
      default:
        // If name doesn't match any, display default values
        imageSrc = thinking; // Update with your default image path
        headingText = 'Name Not Found';
        setBgColor(`linear-gradient(to right, 
          rgb(191, 33, 47) 0%, 
          rgb(191, 33, 47) 33.3%, 
          rgb(0, 111, 60) 33.3%, 
          rgb(0, 111, 60) 66.6%, 
          rgb(38, 75, 150) 66.6%, 
          rgb(38, 75, 150) 100%)`);
        break;
    }
    
    // Update the state variables for image source and heading text
    setImageSrc(imageSrc);
    setHeadingText(headingText);
    setShowForm(false);
  };



const handleReset = () => {
  setName('');
  setImageSrc(thinking);
  setHeadingText('\uD83D\uDC40 What family are you in? \uD83D\uDC40');
  setBgColor(`linear-gradient(to right, 
    rgb(191, 33, 47) 0%, 
    rgb(191, 33, 47) 33.3%, 
    rgb(0, 111, 60) 33.3%, 
    rgb(0, 111, 60) 66.6%, 
    rgb(38, 75, 150) 66.6%, 
    rgb(38, 75, 150) 100%)`);
  setShowForm(true);
};

  return (
    <div className="App" style={{ background: bgcolor }}>
      <img className="image" src={imageSrc} height="500px" alt="pokeball" />
      <h1 className="what_fam">{headingText}</h1>
      {showForm && (
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
    )}
    {!showForm && (
      <button className="reset-button" onClick={handleReset}>Reset</button>
    )}
    </div>
  );
}

export default App;
