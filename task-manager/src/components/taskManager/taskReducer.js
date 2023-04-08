
export const taskReducer=(state,action)=>{
    switch(action.type){
        case "EMPTY_FIELD":
            return {
                ...state,
                isAlertOpen:true,
                alertContent:"Fields should be filled",
                alertClass:"danger"
            }
        case "CLOSE_ALERT":
            return {
                ...state,

                    isAlertOpen:false,
            }
        case "ADD_TASK":
            const allTasks = [...state.tasks,action.payload]
            return {
                ...state,
                tasks:allTasks,
                isAlertOpen:true,
                alertContent:"Task added successfully",
                alertClass:"success"
            }
        case "OPEN_EDIT_MODAL":
            const taskToEdit = state.tasks.find((task)=>task.id === action.payload)
            console.log(taskToEdit.id, action.payload)
           
                return {
                    ...state,
                    isEditModalOpen:true,
                    taskID:action.payload,
                    isEditing:true,
                    modalTitle:"Edit Task",
                    modalMsg:"You are about to edit this task.",
                    modalActionText:"Edit",

                }
        case "CLOSE_MODAL":
            return {
                ...state,
                isEditModalOpen:false,
                isDeleteModalOpen:false,

            }
        case "EDIT_TASK":
            return{
                ...state,     
                   isEditing:true,    

            }
        case "UPDATE_TASK":
          
              
                const updatedTask = action.payload
                const id = action.payload.id;
                //find the task index
                const taskIndex = state.tasks.findIndex((task)=>{
                   return  task.id === id
                
                });
                //update the task by its index
                const updatedTasks = [...state.tasks];//copy the tasks
                updatedTasks[taskIndex] = updatedTask;//update the task
                return {
                    ...state,
                    tasks:updatedTasks,
                    isEditing:false,
                    isAlertOpen:true,
                    alertContent:"Task updated successfully",
                    alertClass:"success"
                }
        case "OPEN_DELETE_TASK_MODAL":
            return {
                ...state,
                isDeleteModalOpen:true,
                taskID:action.payload,
                modalTitle:"Delete Task",
                modalMsg:"You are about to delete this task.",
                modalActionText:"Delete",

            }
        case "DELETE_TASK":
            
            const filteredTasks = state.tasks.filter((task)=>task.id !== action.payload)
            return {
                ...state,
                tasks:filteredTasks,
                isAlertOpen:true,
                alertContent:"Task deleted successfully",
                alertClass:"success",
             
            }
        case "COMPLETE_TASK":
         
            const taskIndexComplete = state.tasks.findIndex((task)=>{
                return task.id === action.payload
            })
           let completedTasks = {
               id:action.payload,
                name:state.tasks[taskIndexComplete].name,
                date:state.tasks[taskIndexComplete].date,
                complete:true

           }
              const tasksToBeCompleted = [...state.tasks];//copy the tasks
              tasksToBeCompleted[taskIndexComplete] = completedTasks;//update the task
                return {
                    ...state,
                    tasks:tasksToBeCompleted,
                    isAlertOpen:true,
                    alertContent:"Task completed successfully",
                    alertClass:"success",
                }
       

         

            
        };
        

    return state;
 }