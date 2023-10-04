import axios from 'axios';
import React from 'react'

const AddNote = (props) => {

  const submitHandler = async(event) =>{
    event.preventDefault();
    const formData = event.target;
    const noteData = {
      userID: localStorage.getItem('userID'),
      notes: [{
        title: formData.noteTitle.value,
        description: formData.noteDescription.value
      }]
    }

    const saveNoteRes = await axios.post('http://localhost:8000/user/addNote',noteData);
    window.alert(saveNoteRes.data.msg);
    props.noteAdded();

  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <input type='text' name='noteTitle' placeholder='Enter note title'/>
      </div>
      <div>
      <textarea name="noteDescription" id="description" rows="5" placeholder='Note Description...'/>
      </div>
      <div>
        <button type='submit'>Add Notes</button>
      </div>
    </form>
  )
}

export default AddNote
