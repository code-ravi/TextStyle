import { useState } from 'react';
import './App.css';
import Alert from './Component/Alert';
import Home from './Component/Home';
import Navbar from './Component/Navbar';

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type
      }) 
      setTimeout(() => {
        setAlert(null)
      }, 1500);
    }

  // mode
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#4f4c4f'
      showAlert("Dark Mode has been Enabled!", 'Sucess')
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been Enabled!", 'Sucess')
    }
  }
  return (
    <>
      <Navbar toggleMode={toggleMode} mode={mode} />
      <Alert alert={alert}/>
      <Home mode={mode} showAlert={showAlert}/>
    </>
  );
}

export default App;
