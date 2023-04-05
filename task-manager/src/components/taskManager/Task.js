import React from 'react'
import  './TaskManager.css'
import {FaEdit,FaCheckDouble,FaTrashAlt} from 'react-icons/fa'


const Task = ({id,name,date,complete,editTask}) => {
  return (
    <div key={id} className={ complete ? "task complete" : "task"}>
         <span>
            <p><b>Task:</b>{name}</p>
            <p><b>Date:</b>{date}</p>
         </span>
         <span>
                <button onClick={()=>editTask(id)}><FaEdit  color="green"  /></button>
                <button ><FaTrashAlt color="red" /></button>
                <button ><FaCheckDouble color="purple" /></button>
         </span>

    </div>
  )
}

export default Task