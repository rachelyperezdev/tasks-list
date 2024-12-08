import { Button, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import axios from "axios";
import { useState } from 'react';
import { API_URL } from '../utils';

const AddTaskForm = ({fetchTasks} : {fetchTasks: () => void}) => {
    const  [newTask, setNewTask] = useState<String>("");

    const addNewTask = async () => {
      try {
        await axios.post(API_URL,  {
          name: newTask,
          completed: false
        })

        await fetchTasks();

        setNewTask('')
      } catch(err){
        console.log(err)
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
