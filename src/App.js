import React from 'react';
import Navbar from './components/Navbar/Navbar'; // Import the Navbar component
import './App.css'; // Import your CSS or global styles

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Add the Navbar component */}
      <header className="App-header">
        {/* You can keep or update the existing content */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
