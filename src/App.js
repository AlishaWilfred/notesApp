import React from "react";
import Header from "./Notes/Header";
import Notes from "./Notes/Notes";

function App() {
  const [input, setInput] = React.useState({
    id: Math.floor(Math.random() * 10000),
    title: "",
    text: "",
    date: "21/07/2022",
  });
  // console.log(input)


  const retrieve= JSON.parse(localStorage.getItem("notes"))
  const [notes, setNotes] = React.useState(retrieve);

  React.useEffect(()=>{
    localStorage.setItem("notes",JSON.stringify(notes))
  },[notes])

  const addNote = (e) => {
    e.preventDefault();
    const dates = new Date();
    const newNote = {
      id: Math.floor(Math.random() * 10000),
      title: input.title,
      text: input.text,
      date: dates.toLocaleDateString("en", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
    setInput({ title: "", text: "" });
  };
  //  console.log(notes)

  const deleteNote = (id) => {
    const updatedNote = notes.filter((elem, ids) => ids !== id);
    setNotes(updatedNote);
  };
  return (
    <div className="App">
      <Header />
      <Notes
        input={input}
        setInput={setInput}
        addNote={addNote}
        notes={notes}
        deleteNote={deleteNote}
      />
      
    </div>
  );
}

export default App;

