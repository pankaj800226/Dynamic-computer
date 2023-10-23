// import axios from 'axios';
import React, { useState } from 'react'
import axios from 'axios'
const Task = () => {
  const [task, setTask] = useState()
  
  const handleAdd = () => {
    axios.post('http://localhost:5000/add', {
      task
    }).then(result => console.log(result))
      .catch(err => console.log(err))
    
    }
  
  return (
    <div className='task'>
      <textarea name="textarea" placeholder='Enter your feed back' onChange={(e) => setTask(e.target.value)}></textarea>
      
      <button onClick={handleAdd}>Submit</button>
    </div>
  )
}

export default Task