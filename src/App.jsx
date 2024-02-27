import React, { createContext, useState } from 'react';
import './App.css';
import CustomComponent from './components/UseEffect';
import MyContextComponent from './components/UseContext';

export const DarkThemeContext = createContext();

function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggle = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <DarkThemeContext.Provider value={darkTheme}>
        <div className={`App ${darkTheme ? "light" : "dark"}`}> 
          <button onClick={toggle}>Toggle Theme</button>
          <MyContextComponent />
        </div>
    </DarkThemeContext.Provider>
  );
}

export default App;
