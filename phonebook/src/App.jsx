import { useState } from "react";

const App = () => {
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [searchResult, setSearchResualt] = useState([]);

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
      number: newNum,
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
  const handleSerach = (event) => {
    event.preventDefault();
    const searchName = event.target.value;
    setSearchResualt(persons.filter(person => 
      person.name.toLowerCase().includes(event.target.value.toLowerCase())
    ));
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input type="text" onChange={handleSerach}/>
      </div>
      <h2>add a new</h2>
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
      <ul>
        {persons.map((person) => (
          <li key={person.name}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
      <h2>Search Reasult</h2>
      <ul>
        {searchResult.map((person) => (
          <li key={person.name}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
