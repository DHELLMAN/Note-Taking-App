import axios from 'axios';
import React, { useState } from 'react'
import classes from './AddNote.module.css';

const INITIAL_STATE = {
  title:'',
  description:''
}
const AddNote = (props) => {

  const [notesData, setNotesData] = useState(INITIAL_STATE);

  const inputChangeHandler = (event)=>{
    setNotesData(prevState=>{
      return {
        ...prevState,
        [event.target.name]:event.target.value
      }
    })
  }

  const submitHandler = async(event) =>{
    event.preventDefault();
    const noteData = {
      userID: localStorage.getItem('userID'),
      notes: [{
        title: notesData.title,
        description: notesData.description
      }]
    }

    const saveNoteRes = await axios.post('http://localhost:8000/user/addNote',noteData);
    window.alert(saveNoteRes.data.msg);
    props.noteAdded();
    setNotesData(INITIAL_STATE);
  }

  return (
    <div className={classes.card}>
      <form className={classes['form-control']} onSubmit={submitHandler}>
        <div>
          <input type='text' name='title' value={notesData.title}  onChange={inputChangeHandler} placeholder='Enter note title'/>
        </div>
        <div>
        <textarea name="description" id="description" rows="5" value={notesData.description} onChange={inputChangeHandler} placeholder='Note Description...'/>
        </div>
        <div className={classes.btn}>
          <button type='submit'>Add Note</button>
        </div>
      </form>
    </div>
  )
}

export default AddNote
