import { useState, useEffect } from "react";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import axios from "axios";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }, [])
  console.log("render", notes.length, "notes");

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

  const handleSerach = (event) => {
    if (event.target.value == "") {
      return "";
    }
    event.preventDefault();
    const searchName = event.target.value;
    setSearchResualt(
      persons.filter((person) =>
        person.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={handleSerach} />

      <h2>add a new</h2>
      <PersonForm
        onSubmit={addName}
        onChangeName={inputChange}
        onChangeNum={inputChangeNum}
        newName={newName}
        newNum={newNum}
      />

      <h2>Numbers</h2>
      <Persons persons={persons} />

      <h2>Search Reasult</h2>
      <Persons persons={searchResult} />
    </div>
  );
};
export default App;
