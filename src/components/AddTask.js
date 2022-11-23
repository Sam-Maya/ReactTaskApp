import { useState } from "react"

const AddTask = ({onAdd}) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if(!text){
      alert('Please add task')
      return
    }

    onAdd({text, day, reminder})

    setText('')
    setDay('')
    setReminder(false)
  }

  return (
    <form className='add-form'>
        <div className="form-control">
            <label>Task</label>
            <input type='text' placeholder='Enter Task' value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>Day</label>
            <input type='Day' placeholder='Enter Day' value={day} onChange={(e) => setDay(e.target.value)}/>
        </div>
        <div className="form-control form-control-check">
            <label>Set Reminder</label>
            <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
        </div>
        <input type='submit' value='Add Task' className="btn btn-block" onClick={(e) => onSubmit(e)}/>
    </form>
  )
}

export default AddTask