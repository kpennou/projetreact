// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import PlayersList from './components/PlayersList';

const App = () => {
  return (
    <div className="min-vh-100" style={{ 
      background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)' 
    }}>
      <PlayersList />
    </div>
  );
}

export default App;