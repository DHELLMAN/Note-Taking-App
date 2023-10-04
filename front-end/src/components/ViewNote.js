import axios from 'axios';
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

const ViewNote = (props) => {

    const {state} = useLocation();
    const [data, setData] = useState({
        title: state.noteData.title,
        description: state.noteData.description
    })

    const changeHandler = (event) =>{
        setData(prevState=>{
            return {...prevState, [event.target.name]:[event.target.value]}
        })
    }

    const editNoteHandler = async (event) =>{
        event.preventDefault();
        const updatedData = {
            userID: localStorage.getItem('userID'),
            noteID: state.noteData.id,
            title: data.title,
            description: data.description
        }

        const update = await axios.post('http://localhost:8000/user/update-note',updatedData);
        window.alert(update.data.msg);
        //update functionality in between
    }

    const deleteNoteHandler = (event) =>{
        event.preventDefault();
        //delete note functionality remaining
    }

    return (
        <form>
            <div className='concept'>
                <input type='text' value={data.title} onChange={changeHandler} name='title'/>
                <textarea rows='5' value={data.description} onChange={changeHandler} name='description'/>
                <div>
                    <button className='btn' type='submit' onClick={editNoteHandler}>Update</button>
                    <button className='btn' type='submit' onClick={deleteNoteHandler}>Delete</button>
                </div>
            </div>
        </form>
    )
}

export default ViewNote