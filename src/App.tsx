import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './routes';
import WinePage from './routes/wine';
import VisitPage from './routes/visit';
import AboutPage from './routes/about';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wine" element={<WinePage />} />
        <Route path="/visit" element={<VisitPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;