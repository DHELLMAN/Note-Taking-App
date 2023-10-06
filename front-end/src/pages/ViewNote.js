import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import classes from './ViewNote.module.css';
import { BASE_URL } from '../services/helper';

const ViewNote = () => {

    const navigate = useNavigate();

    const {state} = useLocation();
    const [data, setData] = useState({
        title: state.noteData.title,
        description: state.noteData.description
    })

    const changeHandler = (event) =>{
        setData(prevState=>{
            return {...prevState, [event.target.name]:event.target.value}
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

        const update = await axios.post(`${BASE_URL}/user/update-note`,updatedData);
        window.alert(update.data.msg);
        if(update.data.status){
            navigate('/userDashboard');
        }
    }

    const deleteNoteHandler = async(event) =>{
        event.preventDefault();
        const noteData = {
            userID: localStorage.getItem('userID'),
            noteID: state.noteData.id,
        }

        const deleteNote = await axios.post(`${BASE_URL}/user/delete-note`,noteData);
        window.alert(deleteNote.data.msg);
        if(deleteNote.data.status){
            navigate('/userDashboard');
        }
    }

    return (
        <form className={classes['form-control']}>
            <div className={classes.card}>
                <input type='text' value={data.title} onChange={changeHandler} name='title'/>
                <textarea rows='5' value={data.description} onChange={changeHandler} name='description'/>
                <div className={classes.btn}>
                    <button type='submit' onClick={editNoteHandler}>Update</button>
                    <button className='btn' type='submit' onClick={deleteNoteHandler}>Delete</button>
                </div>
            </div>
        </form>
    )
}

export default ViewNote