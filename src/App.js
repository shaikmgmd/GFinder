import './App.css';
import React, { useState } from 'react';

import {Navbar} from './components/Navbar';
import {AllRoutes} from './components/AllRoutes.js';
import {Footer} from './components/Footer.js';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className='bg-white-200 dark:bg-sky-900 dark:text-gray-200 min-h-screen'>
          <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
            <AllRoutes />
          <Footer />
      </div>
    </div>
  );
}

export default App;
