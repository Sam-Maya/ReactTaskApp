import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';



const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Meeting with steve',
        day: 'Feb 1st at 2:30',
        reminder: true
    },
    {
        id: 2,
        text: 'Meeting with Jay',
        day: 'Feb 2nd at 2:30',
        reminder: true
    },
    {
        id: 3,
        text: 'Meeting with Bob',
        day: 'Feb 3rd at 2:30',
        reminder: false
    }
  ])

  //add task
  const addTask = (task) =>{
    const newId = tasks[tasks.length-1]['id'] + 1
    const newTask = {id: newId, ...task}
    setTasks([...tasks, newTask])
  }

  //delete task 
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }


  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks'}
    </div>
  );
}

export default App;