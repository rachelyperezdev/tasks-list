import { Button, Checkbox, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react'
import UpdateTaskForm from './UpdateTaskForm';
import classnames from 'classnames';
import axios from "axios";
import { API_URL } from '../utils';

type TaskType = {
    id: number,
    name: string,
    completed: boolean
}

const Task = ({task, fetchTasks} : {task : TaskType, fetchTasks : () => void}) => {
    const {id, name, completed} = task;

    const [isComplete, setIsComplete] = useState<boolean>(completed);
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)
  
    const handleUpdateTaskCompletion = async () => {
        try{
            await axios.put(API_URL, {
                id, 
                name, 
                completed: !completed
            })
            setIsComplete((prev) => !prev);
        } catch(err){
            console.log(err)
        }

    }

    const handleDeleteTask = async () => {
        try {
            await axios.delete(`${API_URL}/${task.id}`)

            await fetchTasks()
        } catch(err){
            console.log(err)
        }
    }

    return (
    <div className='task'>
        <div className={classnames('flex', {
            done: isComplete
        })}>
        <Checkbox checked={isComplete} onChange={handleUpdateTaskCompletion} />
        <Typography variant='h4'>{name}</Typography>
        </div>
        <div className='taskButtons'>
        <Button variant='contained' onClick={() => setIsDialogOpen(true)}>
            <EditIcon/>
        </Button>
        <Button color='error' variant='contained' onClick={() => handleDeleteTask}>
            <DeleteIcon/>
        </Button>
        </div>
        <UpdateTaskForm 
            fetchTasks={fetchTasks}
            isDialogOpen={isDialogOpen} 
            setDialogOpen={setIsDialogOpen} 
            task={task} />
    </div>
  )
}

export default Task
