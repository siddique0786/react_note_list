import React, { useState } from "react";

function App() {
  const [inputtext,setinputtext]=useState("");
  const [items,setitem]=useState([]);

  function handleChange(event){
    const newValue=event.target.value;
    setinputtext(newValue);
  }
  function addItem(){
    setitem((prevItem) => {
      return [...prevItem,inputtext]
    })
    setinputtext("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputtext} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((toadditem) => <li>{toadditem}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
