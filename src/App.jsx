import React from 'react';
import './styles/variables.css';
import './styles/base.css';
import './styles/components.css';
import './styles/layout.css';
import './styles/animations.css';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        {/* Other sections will be added here */}
      </main>
    </div>
  );
}

export default App;