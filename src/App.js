
import About from './components.js/About';
import Navbar from './components.js/Navbar';
import TextForm from './components.js/TextForm';
import React, { useState } from 'react'
import Alert from './components.js/Alert';
import {
  BrowserRouter as Router,
  
  Route,Routes,
  Link
} from "react-router-dom"

function App() {
  const [Mode, setMode] = useState('light');
  const [alertmessage, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  const handleDarkMode = () => {
    if (Mode == 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled", "success")

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    }
  }

  return (
    // text utils project
    <>
      <Router>
        <Alert alert={alertmessage} />

        <Navbar title="textUtils" Mode={Mode} handleDarkMode={handleDarkMode} aboutText="About us" />
        <div className="container">
          <Routes>
            <Route path='/about' element={<About />}/>
        
            <Route path="/" element={<TextForm showAlert={showAlert} aboutText="Enter Text Here to analyse" Mode={Mode} />}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
