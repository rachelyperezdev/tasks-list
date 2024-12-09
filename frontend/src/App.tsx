import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AddTaskForm from './components/AddTaskForm';
import Task from './components/Task';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { getApiUrl } from './utils';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

type TaskType = {
  id: number,
  name: string,
  completed: boolean
}

export default function App() {
  const [tasks, setTasks] = useState<TaskType[]>([])

  const fetchTasks = async () => {
    try {
      const url = getApiUrl("/tasks");
      const  { data } = await axios.get(url);

      setTasks(data)
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AddTaskForm fetchTasks={fetchTasks} />
      {
        tasks.map((task) => <Task task={task} key={task.id
        } fetchTasks={fetchTasks} />)
      }
    </ThemeProvider>
  );
}
