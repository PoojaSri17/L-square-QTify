import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Section from './components/Section/Section';
import AlbumSongsPage from './components/Album Songs Page/AlbumSongsPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Routes>
        {/* Main Page - Top and New Albums */}
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

        {/* Album Songs Page - Displays individual album details */}
        <Route
          path="/album/:title"
          element={<AlbumSongsPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
