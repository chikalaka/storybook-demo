import React, { useState } from 'react';
import Button from './Button'
import Form from './Form'
import logo from './logo.svg';
import './App.css';

function App() {
  const [showForm, setShowForm] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {!showForm ?
          <>
            <div>Subscribe with Email</div>
            <div onClick={() => setShowForm(true)}>
              <Button className='button'>Subscribe</Button>
            </div>
          </> :
          <Form> title</Form>
        }
      </header>
    </div>
  );
}

export default App;
