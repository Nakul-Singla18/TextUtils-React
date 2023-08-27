import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0f213a';
      showAlert('Dark Mode has been Enabled', 'success');
      document.title = 'TextUtils - DarkMode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been Enabled', 'success');
      document.title = 'TextUtils - LightMode';
    }
  };

  return (
    <Router>
      <div>
        <Navbar
          title="TextUtils"
          aboutText="About us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
        {/* <TextForm showAlert={showAlert} heading="Enter Text Below to Analyze" mode={mode} /> */}
          <Routes>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word counter, Character Counter,Remove Extra Spaces " mode={mode} />} />
            <Route exact path="/about" element={<About  mode={mode}/>} />
          </Routes>
        </div>
      </div>
     </Router>
  );
}

export default App;
