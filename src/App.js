import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const getTasksFromDB = await fetchTasks()
      setTasks([...getTasksFromDB])
    }
    getTasks()
  }, [])
//fetch tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }
  //fetch task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }

  //add task
  const addTask = async (task) =>{
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST', 
      headers:{'content-type': 'application/json'},
      body: JSON.stringify(task)
    })

    const data = await res.json()

    setTasks([...tasks, data])
    // const newId = tasks[tasks.length-1]['id'] + 1
    // const newTask = {id: newId, ...task}
    // setTasks([...tasks, newTask])
  }

  //delete task 
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'})
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //toggle reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(updatedTask),
    })

    const data = await res.json()

    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task))
  }


  return (
    <Router>
        <div className="container">
          <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
          <Routes>
            <Route path='/' element={
               <>
               {showAddTask && <AddTask onAdd={addTask}/>}
               {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks'}
             </>
            }/>
            <Route path='/about' element={<About />} />
          </Routes>
          <Footer />
        </div>
    </Router>
  );
}

export default App;