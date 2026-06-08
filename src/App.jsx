import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navbar berada di tingkat paling atas dan mandiri */}
      <Navbar /> 
      
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;