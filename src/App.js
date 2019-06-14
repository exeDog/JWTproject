import React from 'react';
import './App.css';
import Login  from './Login'
import JWT from './JWT'

function App() {
  const initialValues = {userName: '', passWord: ''};
  return (
    <div className="App">
      <header className="App-header">
        <h1>Register</h1>
     <Login initialValues={initialValues} callBack={JWT}/>
      </header>
    </div>
  );
}

export default App;
