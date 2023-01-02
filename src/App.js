import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  HashRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const setAlertwithType = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "#121212"
      document.body.style.color = 'white'
      setAlertwithType('Dark Mode Enabled', 'success')
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white"
      document.body.style.color = 'black'
      setAlertwithType('Light Mode Enabled', 'success')
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          
          <Routes>
            <Route path="/" element={<TextForm setAlertwithType={setAlertwithType} heading="Enter the Text to Analyze" mode={mode} />}>
              
            </Route>
            <Route path="/about" element={<About/>}>
             
            </Route>
            
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
