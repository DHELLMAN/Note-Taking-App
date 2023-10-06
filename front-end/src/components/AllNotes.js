import React from 'react'
import classes from './AllNotes.module.css';

const AllNotes = (props) => {
  return (
    <header className={classes.mainHeader}>
      <h1>Today's Notes</h1>
      <div className={classes.concepts}>
        {props.notes}
      </div>
    </header>
  )
}

export default AllNotes
