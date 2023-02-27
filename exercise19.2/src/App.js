import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/Context';
import MainNavigation from './components/MainNavigation';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <MainNavigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;