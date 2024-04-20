import React, { useState } from 'react';
import './App.css';
import pokeball from './pokeball.webp';

import charizard from './charizard.gif'
import blastoise from './blastoise.gif'
import venusaur from './venusaur.gif'
import blossom from './blossom.gif'
import bubbles from './bubbles.gif'
import buttercup from './buttercup.gif'

function App() {
  // State to hold the input name
  const [name, setName] = useState('');

  // State to hold the image source
  const [imageSrc, setImageSrc] = useState(pokeball); // Set default image path

  // State to hold the heading text
  const [headingText, setHeadingText] = useState('What fam are you in?'); // Set default heading text

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

    const imagePathsTight = [charizard, blossom]; // Add your image paths here
    const imagePathsLoose = [blastoise, bubbles];
    const imagePathsClose = [venusaur, buttercup];

    // Randomly select an image path from the array
    const randomIndex = Math.floor(Math.random() * imagePathsTight.length);
    const randomImagePathTight = imagePathsTight[randomIndex];
    const randomImagePathLoose = imagePathsLoose[randomIndex];
    const randomImagePathClose = imagePathsClose[randomIndex];

    const nameMappings = {
    'Anthony Doan': 'name2',
    'Billy Gozali': 'name2',
    'Brandon Chan': 'name2',
    'Charleen Madayag': 'name2',
    'Christy Lu': 'name2',
    'David Malonzo': 'name2',
    'Durell Freeman': 'name2',
    'Kaden Nohara': 'name2',
    'Fiona Lee': 'name2',
    'Gobind Kapoor': 'name2',
    'Hannah Liu': 'name2',
    'Hardy Situ': 'name2',
    'Hillary Nguyen': 'name2',
    'Hsieh Cheng Yen': 'name2',
    'Jonathan Ngo': 'name2',
    'Lauren Lai': 'name2',
    'Michael Tanaputra': 'name2',
    'Vivian Shen': 'name2',
    
    'Aaron Hu': 'name1',
    'Christine Liau': 'name1',
    'Christine Palmeri': 'name1',
    'Cindy Li': 'name1',
    'Colleen McKenna': 'name1',
    'Elson Wong': 'name1',
    'Janice Chen': 'name1',
    'Jatziri Gonzalez': 'name1',
    'Jordan Ng': 'name1',
    'Kylie Tzeng': 'name1',
    'Loc Vo': 'name1',
    'Madison Liang': 'name1',
    'Nathan Guan': 'name1',
    'Tisha Kathrani': 'name1',
  
    'Carla Basurto': 'name3',
    'Emily Le': 'name3',
    'Jade Lee': 'name3',
    'Nicholas Mah': 'name3',
    'Sandy Yu': 'name3',
    'Tony Zhong': 'name3'
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

  const nameIdentifier = getNameMapping(name);

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
        headingText = '\uD83D\uDC9A AWW YOU\'RE IN CLOSE FAM! \uD83D\uDC9A';
        setBgColor('rgb(0, 111, 60)');
        break;
      default:
        // If name doesn't match any, display default values
        imageSrc = pokeball; // Update with your default image path
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
  setImageSrc(pokeball);
  setHeadingText('What fam are you in?');
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
