import React,{useState,useRef,useEffect} from 'react'
import  './TaskManager.css'
import Task from './Task'
import useLocalStorage from "use-local-storage";

const TaskManager = () => {
    const [name,setName] = useState("")
    const [date,setDate] = useState("")
    const [tasks,setTasks] = useLocalStorage("tasks",[])

    const [taskID,setTaskID] = useState(null)
    const [isEditing,setIsEditing] = useState(false)

    const inputRef = useRef(null)
    

    const handleSubmit = (e) =>{
        e.preventDefault();
        if( name === "" || date === ""){
            return alert("Please fill all the fields")

        }else if(name && date && isEditing){
            const editingTasks = tasks.map((task)=>{
                if(task.id === taskID){
                    return {...task,name,date,complete:false}
                }
                return task
            })
            setTasks(editingTasks)
            setName("")
            setDate("")
            setIsEditing(false)
            setTaskID(null)


        }else{
            const newTask = {
                id:  Date.now(),
                name,
                date,
                complete:false
            }
            setTasks([...tasks,newTask])
            setName("")
            setDate("")
            console.log(tasks)
        }
       
    }

    const editTask =(id) =>{
        const thisTask = tasks.find((task)=>task.id === id)
        setIsEditing(true)
        setTaskID(id)
        console.log(id)
        console.log(thisTask.date)
        setName(thisTask.name)
        setDate(thisTask.date)
    }

    const deleteTask=(id)=>{
        if(window.confirm("Are you sure you want to delete this task?")){
        const updatedTasks = tasks.filter((task)=>task.id !== id);
        setTasks(updatedTasks)
    }
    };

    const completeTask=(id)=>{
        const completedTasks = tasks.map((task)=>{
            if (task.id === id){
                return {...task,complete:true}
            }
                
            return task
        })
        setTasks(completedTasks)

    }

useEffect(()=>{
    inputRef.current.focus()
},[])

  return (
    <div className='--bg-primary'>
        <h1 className='--text-center --text-light'>Task Manager</h1>
        <div className='--flex-center --p'>
            <div className="--card --bg-light --width-500px --p --flex-center" >
                <form className='form --form-control' onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Task:</label>
                        <input
                        ref={inputRef}
                         type="text"
                          placeholder='Task name'
                           name='name' 
                           value={name} 
                           onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="date">Task:</label>
                        <input 
                        type="date" 
                        placeholder='Task name'
                         name='date' 
                         value={date} 
                        onChange={(e)=>setDate(e.target.value)}/>

                         
                    </div>
                    <button className="--btn --btn-success --btn-block">Save Task</button>
                </form>
            </div>

        </div>
        {/* Display Task */}
        <article className='--flex-center --my2'>
            <div className=" --width-500px --p " >
            <h2 className='--text-light'>Task List</h2>
            <hr style={{background: "#fff"}} />
            {tasks.length === 0 ? (<p className='--text-light'>No Task Found!!!</p>) : tasks.map((task)=>(
            <Task  key={task.id} {...task} editTask={editTask} onDeleteTask={deleteTask} onComplete={completeTask}/>

            ))}
            
            </div>

        </article>
    </div>
  )
}

export default TaskManager