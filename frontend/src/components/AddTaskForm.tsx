import { Button, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import axios from "axios";
import { useState } from 'react';
import { getApiUrl } from '../utils';

const AddTaskForm = ({fetchTasks} : {fetchTasks: () => void}) => {
    const  [newTask, setNewTask] = useState<string>("");

    const addNewTask = async () => {
      try {
        const url = getApiUrl("/task");
        await axios.post(url,  {
          name: newTask,
          completed: false
        })

        await fetchTasks();

        setNewTask('')
      } catch(err){
        console.log(`Error adding a new task ${err}`)
        alert("Failed to add a new task. Please try again.");
      }
    }

  return (
    <div>
      <Typography align="center" variant="h2" paddingTop={2} paddingBottom={2}>My Tasks</Typography>
      <div className='addTaskForm'>
      <TextField size="small" label="Task" variant="outlined" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
      <Button disabled={!newTask.length} variant='outlined' onClick={addNewTask}>
        <AddIcon/>
      </Button>
      </div>
    </div>
  )
}

export default AddTaskForm
