import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Process from './pages/Process';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/process" element={<Process />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;