import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [check, setCheck] = useState('')

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor =  '#042743';
      showAlert('Dark mode has been enabled', 'success');
      
    }else{
      setMode('light');
      document.body.style.backgroundColor =  'white';
      showAlert('light mode has been enabled', 'success');
    }
    if(check === ''){
      setCheck('checked')
    }else{
      setCheck('')
    }
  }



  return (
    <React.Fragment>
      <Router>
        <Navbar title='TextUtile' mode={mode} toggleMode={toggleMode} check={check} key={new Date()}/>
        <Alert alert={alert}/>
        <div className='container my-3'>
          <Routes>
            <Route path='/about' element={<About mode={mode}/>} />
            <Route path='/' element={<TextForm showAlert={showAlert} mode={mode}/>} />
          </Routes>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
