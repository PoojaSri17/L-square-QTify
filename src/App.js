import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Section from './components/Section/Section';
//import Albums from './components/Albums/Albums';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Section
                title="Top Albums"
                endpoint="https://qtify-backend-labs.crio.do/albums/top"
              />
              <Section
                title="New Albums"
                endpoint="https://qtify-backend-labs.crio.do/albums/new"
              />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
