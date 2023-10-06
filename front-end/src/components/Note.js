import React from 'react'
import { useNavigate } from 'react-router-dom'
import classes from './Note.module.css';

const Note = (props) => {

  const navigate = useNavigate();

  const viewNote = () =>{
    navigate('viewNote',{
      state:{
        noteData: props
      }
    })
  }

  return (
    <div className={classes.concept} onClick={viewNote}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  )
}

export default Note
