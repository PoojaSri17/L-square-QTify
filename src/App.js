import React from 'react';
import Navbar from './components/Navbar/Navbar'; // Import the Navbar component
import Hero from './components/Hero/Hero'; // Correctly import the Hero component
import './App.css'; // Import your CSS or global styles

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Add the Navbar component */}
      <Hero /> {/* Add the Hero component */}
    </div>
  );
}

export default App;
