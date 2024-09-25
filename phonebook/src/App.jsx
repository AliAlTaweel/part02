import { useState } from "react";

const App = () => {
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");
  const [persons, setPersons] = useState([{ name: "Arto Hellas",phoneNum: "1233456789" }]);

  const inputChange = (event) => {
    setNewName(event.target.value);
  };
  const inputChangeNum = (event) => {
    setNewNum(event.target.value);
  };
  const addName = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      phoneNum: newNum,
    };

    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    setPersons(persons.concat(newPerson));
    setNewName("");
    setNewNum("");
  };

  console.log(persons);
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div className="name">
          name: <input id="name" value={newName} onChange={inputChange} />
        </div>
        
        <div className="phone">
          phone: <input id="phone" value={newNum} onChange={inputChangeNum} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>debug: {newName}</div>
      <ul>
        {persons.map((person) => (
          <li key={person.name}>{person.name}   {person.phoneNum}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
