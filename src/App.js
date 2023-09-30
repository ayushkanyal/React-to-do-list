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

  return (
    <div className="App">
      <InputForm />
      <ToDoList itemsList={DUMMY_DATA} />
    </div>
  );
}

export default App;
