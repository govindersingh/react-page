import React from 'react';
import './App.css';
import Task1 from './components/Task1';
import Task2 from './components/Task2';


function App() {
  return (
    <div>
      <div className="container">
        <div className="row">
        <div className="col"><Task1/></div>
        <div className="col"><Task2/></div>
        </div>
      </div>
    </div>
  );
}

export default App;
