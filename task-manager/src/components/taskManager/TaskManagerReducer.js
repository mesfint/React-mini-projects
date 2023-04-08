import React,{useState,useRef,useEffect,useReducer} from 'react'
import  './TaskManager.css'
import Task from './Task'
import useLocalStorage from "use-local-storage";
import Alert from '../alert/Alert';
import Confirm from '../confirm/Confirm';
import {taskReducer} from "./taskReducer";

const TaskManagerReducer = () => {
    const [name,setName] = useState("");
    const [date,setDate] = useState("")

    const [tasks,setTasks] = useLocalStorage("tasks",[])


    const initialState={

       tasks,
       taskID:null,
       isEditing:false,
       isAlertOpen:false,
       alertContent:"This is an alert",
       alertClass:"danger",

       isEditModalOpen:false,
       isDeleteModalOpen:false,
       modalTitle:"Delete Task",
       modalMsg:"You are about to delete this task.",
       modalActionText:"OK",
   }
     const [state,dispatch] = useReducer(taskReducer,initialState);


    const inputRef = useRef(null)


    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!name || !date){
            dispatch({
                type:"EMPTY_FIELD",
            })
        }
        if(name && date && state.isEditing)  {
          const updatedTask = {
                id:state.taskID,
                name,
                date,
                complete:false
          };
          dispatch({
            type:"UPDATE_TASK",
            payload:updatedTask

          });
            setName("");
            setDate("");

           
            //update local storage
            const updatedTasks = state.tasks.map((task)=>{
                if(task.id === state.taskID){
                    return updatedTask;
                }
                return task;
            })
            setTasks(updatedTasks);//update local storage

          return;

        }
         if(name && date) {
            const newTask = {
                id: Date.now(),
                name,
                date,
                isAlertOpen:true,
                complete:false
            }
               
            dispatch({
                type:"ADD_TASK",
                payload:newTask
            })
            setName("");
            setDate("");
            setTasks([...tasks,newTask]);//update local storage
        }


    }

    const openEditTaskModal=(id)=>{
        
        dispatch({
            type:"OPEN_EDIT_MODAL",
            payload:id
        })
    }

    const editTask =() =>{
        console.log(state.taskID);
        const id = state.taskID;
        dispatch({
            type:"EDIT_TASK",
            payload:id
        })
        const thisTask = state.tasks.find((task)=>task.id === id)
        setName(thisTask.name);
        setDate(thisTask.date);
        closeModal();
        
        

    }

    const openDeleteMOdal=(id)=>{
        //console.log("deletModalId", id)
        dispatch({
            type:"OPEN_DELETE_TASK_MODAL",
            payload:id
        })
    }

    const deleteTask=()=>{
       const id = state.taskID;
       dispatch({
        type:"DELETE_TASK",
        payload:id
    })
    closeModal();
   
    setTasks(tasks.filter((task)=>task.id !== id))//update local storage
        
       };

    const completeTask=(id)=>{ 
        
        dispatch({
            type:"COMPLETE_TASK",
            payload:id
        })
        setTasks(tasks.map((task)=>{
            if(task.id === id){
                task.complete = true;
            }
            return task;
        }))//update local storage
    }


    const closeModal=()=>{
        dispatch({
            type:"CLOSE_MODAL"
           })
     }


    const closeAlert=()=>{
       dispatch({
        type:"CLOSE_ALERT"
       })
    }

useEffect(()=>{
    inputRef.current.focus()
},[])

return (
    <div className='--bg-primary'>
    {state.isAlertOpen && <Alert alertContent={state.alertContent} alertClass={state.alertClass} onAlertClose={closeAlert} />}
    
    {state.isEditModalOpen && <Confirm modalTitle={state.modalTitle}  modalMsg={state.modalMsg} modalAction={editTask} modalActionText={state.modalActionText} onCloseModal={closeModal} />}
    {state.isDeleteModalOpen && <Confirm modalTitle={state.modalTitle}  modalMsg={state.modalMsg} modalAction={deleteTask} modalActionText={state.modalActionText} onCloseModal={closeModal} />}
        
        <h1 className='--text-center --text-light'>Task Manager Reducer</h1>
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
                    <button className="--btn --btn-success --btn-block">{state.isEditing ? "Edit Task" : "Save Task"}</button>
                </form>
            </div>

        </div>
        {/* Display Task */}
        <article className='--flex-center --my2'>
            <div className=" --width-500px --p " >
            <h2 className='--text-light'>Task List</h2>
            <hr style={{background: "#fff"}} />
            {state.tasks.length === 0 ? (<p className='--text-light'>No Task Found!!!</p>) : state.tasks.map((task)=>(
            <Task  key={task.id} {...task} editTask={openEditTaskModal} onDeleteTask={openDeleteMOdal} onComplete={completeTask}/>

            ))}

            </div>

        </article>
    </div>
  )
}

export default TaskManagerReducer
