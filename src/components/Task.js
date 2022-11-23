import { FaTimes } from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
    const deleteTask = () => {
        onDelete(task.id)
    }
    const toggleReminder = () => {
        onToggle(task.id)
    }
  return (
    <div className={task.reminder === true ? 'task reminder' : 'task'} onDoubleClick={toggleReminder}>
        <h3>{task.text} <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={deleteTask}/></h3>
        <p>{task.day}</p>
    </div>
  )
}


export default Task