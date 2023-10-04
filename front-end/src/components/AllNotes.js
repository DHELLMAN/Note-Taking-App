import React from 'react'

const AllNotes = (props) => {
  return (
    <header>
      <div id='concepts'>
        {props.notes}
      </div>
    </header>
  )
}

export default AllNotes
