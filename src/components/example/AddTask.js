import React from 'react';
import AddIcon from '../icons/Add';

const AddTask = () => (
  <div
    style={{
      margin: '20px auto',
      border: '2px solid #c8c8c8',
      borderRadius: '5px',
      backgroundColor: 'white',
      height: '65px',
      color: '#c8c8c8'
    }}
  >
    <div
      style={{
        display: 'flex',
        paddingLeft: '24px',
        alignItems: 'center',
        fontFamily: 'Roboto',
        fontSize: '24px'
      }}
    >
      <AddIcon size="lg" />
      <p style={{ paddingLeft: '0.5rem' }}>Add Task</p>
    </div>
  </div>
);

export default AddTask;
