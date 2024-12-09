import React, { useState } from 'react'
import { Button, Dialog, DialogTitle, TextField } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import { getApiUrl } from '../utils';
import axios from 'axios';

type TaskType = {
    id: number,
    completed: boolean
}

type UpdateTaskFormProps = {
    isDialogOpen : boolean,
    setDialogOpen : React.Dispatch<React.SetStateAction<boolean>>,
    task : TaskType,
    fetchTasks: () => void
}

const UpdateTaskForm : React.FC<UpdateTaskFormProps> = 
    ( { isDialogOpen, setDialogOpen,  task, fetchTasks } 
        : { isDialogOpen : boolean, 
            setDialogOpen : React.Dispatch<React.SetStateAction<boolean>>, 
            task :  TaskType,
            fetchTasks: () => void}) => {
    const {id, completed} = task;
    const [taskName, setTaskName] = useState<string>('');

    const handleUpdateTaskName = async () => {
        if(!taskName.trim()){
            alert('Task name cannot be empty');
            return;
        }
        
        try {
            const url = getApiUrl("/task");
            await axios.put(url, {
                id,
                name: taskName,
                completed: completed
            })

            await fetchTasks();

            setTaskName('');
        } catch(err) {
            console.log(err)
        }
    }

    return (
    <Dialog open={isDialogOpen}>
        <DialogTitle>Edit Task</DialogTitle>
        <div className="dialog">
            <TextField size="small" label='Task' variant='outlined' onChange={(e) => setTaskName(e.target.value)}></TextField>
        <Button 
            variant='contained' 
            onClick={async () => { 
                await handleUpdateTaskName()
                setDialogOpen(false)
            }}>
                <CheckIcon/>
            </Button>
        </div>
    </Dialog>
    )
}

export default UpdateTaskForm
