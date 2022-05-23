import React from 'react';
import './App.css';
import Task1 from './components/Task1';
import Task2 from './components/Task2';
import Task3 from './components/Task3';
import Task4 from './components/Task4';
import Task5 from './components/Task5';
import Task6 from './components/Task6';


function App() {
  return (
    <div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <Task1 title='Task 1: OnClick change text.' />
          </div>
          <div className="col">
            <Task2 title='Task 2: OnChange change text.' />
          </div>
          <div className="col">
            <Task3 title='Task 3: Clear Text button.' />
          </div>
          <div className="col">
            <Task4 title='Task 4: Convert text to upper case and lower case.' />
          </div>
          <div className="col">
            <Task5 title='Task 5: Remove extra white spaces from the text.' />
          </div>
          <div className="col">
            <Task6 title='Task 6: Count words in the text.' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
