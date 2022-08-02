import './Notes.css';
import NotesList from './NotesList';
import React from 'react';


export default function Notes({input,setInput,addNote,notes,deleteNote}){
  
    function handleChange(e){
    const{name,value}=e.target
    setInput(input=>{
        return{
            ...input,[name]:value
        }
    })
    }

    return(
        <section className='main-container'>
            <div className="heading">
            <h1>Write Your Notes...</h1>
            </div>
            <div className='input-container'>
               <input type="text" placeholder="Title" name="title" value={input.title} onChange={handleChange}></input>
               <input type="text" placeholder="Description" name="text" value={input.text} onChange={handleChange}></input>
               <button className='btn' title='Add Note' onClick={addNote}>Add Note</button>
            </div>
            
           <NotesList notes={notes} deleteNote={deleteNote}/>
        </section>
    )
}
