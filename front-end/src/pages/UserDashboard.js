import React, { useEffect, useState } from 'react'
import AddNote from '../components/AddNote'
import AllNotes from '../components/AllNotes'
import axios from 'axios';
import Note from '../components/Note';
import classes from './UserDashboard.module.css';
import { BASE_URL } from '../services/helper';

const UserDashboard = () => {

  const [notes,setNotes] = useState([]);
  const [noteCounter, setNoteCounter] = useState(0);
  const userID = localStorage.getItem('userID');

  useEffect(()=>{
    const fetchNotes = async()=>{
      const notesData = await axios.post(`${BASE_URL}/user/getNotes`,{userID});
      if(notesData.data.status){
        setNotes(()=>notesData.data.notes);
      }
    }

    fetchNotes();
  },[userID,noteCounter])

  const newNoteAdded = ()=>{
    setNoteCounter(prevState=>prevState+1);
  }

  const noNotes = <h2> No Notes Added So Far!</h2>;
  const notesData =
      notes.map(note=>
            <Note key={note._id} id={note._id} title={note.title} description={note.description}/>
          )

  return (
    <header className={classes.mainHeader}>
      <div  className={classes.card}>
        <h1>Your Notes</h1>
        <AddNote noteAdded={newNoteAdded}/>
      </div>
      <div>
        <AllNotes notes={notes.length>0 ? notesData : noNotes}/>
      </div>
    </header>
  )
}

export default UserDashboard
