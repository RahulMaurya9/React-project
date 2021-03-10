import React , {useState} from 'react';
import "./App.css";
import List from "./Component/Persons";
import data from './Component/data'

function App() {
  const [people , setPeople]= useState(data)
  return (
    <div className="App">
      <h1>The Birthday Remainder</h1>
      <div className="container">
        <div className = "person-data">
          <h3 className="h3-err">{people.length} Person Birthday</h3>
          <List people = {people}/>
          <button onClick={()=>setPeople([])}>Clear All</button>
        </div>
      </div>
    </div>
  );
}

export default App;
