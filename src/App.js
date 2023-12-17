import { useState } from 'react';
import './App.css';
import InputForm from './components/InputForm';
import ToDoList from './components/ToDoList';

function App() {
  const DUMMY_DATA = [
    {
      id: "0",
      text: "Buy Toilet Paper",
    },
    { id: "1", text: "Watch less TV" }
  ];

  const [submittedItems, setSubmittedItems] = useState(DUMMY_DATA);

  function addItems(input){
    setSubmittedItems(prevValue => [...prevValue, {text: input}])
  }

  return (
    <div className="App">
      <InputForm onAdd={addItems}  />
      <ToDoList itemsList={submittedItems} />
    </div>
  );
}

export default App;
